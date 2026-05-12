const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Prevent caching of API responses
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// ══════════════════════════════════════════════════════
//  INIT DB — crea las tablas si no existen
// ══════════════════════════════════════════════════════
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      pin TEXT NOT NULL,
      is_admin BOOLEAN DEFAULT FALSE,
      code CHAR(3) UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS picks (
      username TEXT REFERENCES users(username) ON DELETE CASCADE,
      data JSONB NOT NULL DEFAULT '{"sc":{},"br":{}}',
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      PRIMARY KEY (username)
    );

    CREATE TABLE IF NOT EXISTS results (
      id INT PRIMARY KEY DEFAULT 1,
      data JSONB NOT NULL DEFAULT '{}',
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS wall_posts (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      content TEXT NOT NULL,
      deleted BOOLEAN DEFAULT FALSE,
      delete_count INT DEFAULT 0,
      muted BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS wall_reactions (
      post_id INT NOT NULL REFERENCES wall_posts(id) ON DELETE CASCADE,
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      emoji TEXT NOT NULL,
      PRIMARY KEY (post_id, username)
    );

    CREATE TABLE IF NOT EXISTS wall_comments (
      id SERIAL PRIMARY KEY,
      post_id INT NOT NULL REFERENCES wall_posts(id) ON DELETE CASCADE,
      parent_id INT REFERENCES wall_comments(id) ON DELETE CASCADE,
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      content TEXT NOT NULL,
      deleted BOOLEAN DEFAULT FALSE,
      delete_count INT DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS refs (
      referrer_code CHAR(3) NOT NULL,
      referred_username TEXT NOT NULL,
      PRIMARY KEY (referrer_code, referred_username)
    );

    CREATE TABLE IF NOT EXISTS groups_q (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      code CHAR(6) UNIQUE NOT NULL,
      owner TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS group_members (
      group_id INT NOT NULL REFERENCES groups_q(id) ON DELETE CASCADE,
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      joined_at TIMESTAMPTZ DEFAULT NOW(),
      PRIMARY KEY (group_id, username)
    );

    CREATE TABLE IF NOT EXISTS ranking_history (
      id SERIAL PRIMARY KEY,
      snapshot JSONB NOT NULL,
      label TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS payment_notifications (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      context TEXT NOT NULL,
      payment_type TEXT,
      amount INT,
      seen BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    -- Clasificados oficiales por ronda (lo que el admin marca como "estos pasaron")
    -- Una fila por ronda con un array JSON de códigos de equipos
    CREATE TABLE IF NOT EXISTS qualifiers (
      round TEXT PRIMARY KEY,
      teams JSONB NOT NULL DEFAULT '[]',
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS wall_posts (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS wall_reactions (
      id SERIAL PRIMARY KEY,
      post_id INT NOT NULL REFERENCES wall_posts(id) ON DELETE CASCADE,
      username TEXT NOT NULL,
      emoji TEXT NOT NULL,
      UNIQUE(post_id, username, emoji)
    );

    CREATE TABLE IF NOT EXISTS wall_comments (
      id SERIAL PRIMARY KEY,
      post_id INT NOT NULL REFERENCES wall_posts(id) ON DELETE CASCADE,
      parent_id INT REFERENCES wall_comments(id) ON DELETE CASCADE,
      username TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS wall_strikes (
      username TEXT PRIMARY KEY,
      strikes INT DEFAULT 0,
      muted BOOLEAN DEFAULT FALSE
    );

    -- Insert default admin if not exists
    INSERT INTO users (username, pin, is_admin, code)
    VALUES ('admin', '0000', TRUE, 'ADM')
    ON CONFLICT DO NOTHING;
  `);

  // Migration: fix wall_reactions constraint to allow only 1 reaction per user per post
  try {
    await pool.query(`
      DO $$ BEGIN
        IF EXISTS (
          SELECT 1 FROM pg_constraint 
          WHERE conname = 'wall_reactions_pkey' 
          AND pg_get_constraintdef(oid) LIKE '%(post_id, username, emoji)%'
        ) THEN
          ALTER TABLE wall_reactions DROP CONSTRAINT wall_reactions_pkey;
          DELETE FROM wall_reactions a USING wall_reactions b
            WHERE a.ctid < b.ctid AND a.post_id = b.post_id AND a.username = b.username;
          ALTER TABLE wall_reactions ADD PRIMARY KEY (post_id, username);
        END IF;
      END $$;
    `);
  } catch(e) { console.log('Migration wall_reactions:', e.message); }

  // Migration: approval flow — add approved/phone/full_name to users
  try {
    await pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS approved BOOLEAN DEFAULT FALSE;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS phone TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS full_name TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS is_pro BOOLEAN DEFAULT TRUE;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS requested_type TEXT DEFAULT 'pro';
    `);
    // Auto-approve users that existed before this migration (created more than 1 min ago) and all admins
    await pool.query(`
      UPDATE users SET approved = TRUE
      WHERE approved IS NOT TRUE
        AND (is_admin = TRUE OR created_at < NOW() - INTERVAL '1 minute')
    `);
    // Migrar todos los users existentes a Pro (todos pagaron $350)
    await pool.query(`
      UPDATE users SET is_pro = TRUE
      WHERE is_pro IS NULL
    `);
  } catch(e) { console.log('Migration approval flow:', e.message); }

  console.log('✅ DB inicializada');
}

// ══════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════

// Login
app.post('/api/login', async (req, res) => {
  const { username, pin, refCode } = req.body;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE username = $1', [username]
    );
    if (!rows.length || rows[0].pin !== pin) {
      return res.status(401).json({ error: 'Usuario o PIN incorrecto' });
    }
    const user = rows[0];

    // Bloquear si la cuenta no ha sido aprobada por un admin
    if (user.approved === false) {
      return res.status(403).json({
        error: 'pending_approval: Tu cuenta está esperando aprobación del organizador. Te avisaremos en cuanto te demos acceso.'
      });
    }

    // Registrar referido si viene con código
    if (refCode && refCode.length === 3) {
      const ref = await pool.query(
        'SELECT username FROM users WHERE code = $1', [refCode.toUpperCase()]
      );
      if (ref.rows.length && ref.rows[0].username !== username) {
        await pool.query(
          'INSERT INTO refs (referrer_code, referred_username) VALUES ($1, $2) ON CONFLICT DO NOTHING',
          [refCode.toUpperCase(), username]
        );
      }
    }

    // Asegura que tenga fila en picks
    await pool.query(
      'INSERT INTO picks (username) VALUES ($1) ON CONFLICT DO NOTHING', [username]
    );

    res.json({
      username: user.username,
      is_admin: user.is_admin,
      is_pro: user.is_pro !== false,
      code: user.code
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// ══════════════════════════════════════════════════════
//  USUARIOS (admin)
// ══════════════════════════════════════════════════════

// Obtener todos los usuarios
app.get('/api/users', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT username, is_admin, code, approved, phone, full_name, created_at, is_pro, requested_type FROM users ORDER BY created_at'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Crear usuario (admin) — se crea ya aprobado
app.post('/api/users', async (req, res) => {
  const { username, pin, code } = req.body;
  try {
    await pool.query(
      'INSERT INTO users (username, pin, is_admin, code, approved) VALUES ($1, $2, FALSE, $3, TRUE)',
      [username.toLowerCase(), pin, code.toUpperCase()]
    );
    await pool.query(
      'INSERT INTO picks (username) VALUES ($1) ON CONFLICT DO NOTHING',
      [username.toLowerCase()]
    );
    res.json({ ok: true });
  } catch (e) {
    if (e.code === '23505') return res.status(400).json({ error: 'Usuario o código ya existe' });
    res.status(500).json({ error: e.message });
  }
});

// Inscripción pública — crea usuario en estado "pending approval"
app.post('/api/signup', async (req, res) => {
  let { full_name, phone, username, pin, requested_type } = req.body || {};
  if (!full_name || !phone || !username || !pin) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  full_name = String(full_name).trim().slice(0, 80);
  phone = String(phone).trim().slice(0, 20);
  username = String(username).toLowerCase().trim().slice(0, 30);
  pin = String(pin).trim();
  // Validar tipo solicitado: 'pro' o 'user'
  requested_type = String(requested_type || 'pro').toLowerCase();
  if (!['pro', 'user'].includes(requested_type)) requested_type = 'pro';
  if (!/^[a-z0-9_]{3,30}$/.test(username)) {
    return res.status(400).json({ error: 'Usuario inválido (3-30 caracteres, solo letras, números y _)' });
  }
  if (!/^\d{4,6}$/.test(pin)) {
    return res.status(400).json({ error: 'PIN debe tener entre 4 y 6 dígitos' });
  }
  if (full_name.length < 2) {
    return res.status(400).json({ error: 'Nombre demasiado corto' });
  }
  // Generar código único de 3 caracteres
  const genCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({length:3}, ()=>chars[Math.floor(Math.random()*chars.length)]).join('');
  };
  try {
    let code, attempts = 0;
    while (attempts < 10) {
      code = genCode();
      const exists = await pool.query('SELECT 1 FROM users WHERE code = $1', [code]);
      if (!exists.rows.length) break;
      attempts++;
    }
    await pool.query(
      `INSERT INTO users (username, pin, is_admin, code, approved, phone, full_name, requested_type, is_pro)
       VALUES ($1, $2, FALSE, $3, FALSE, $4, $5, $6, FALSE)`,
      [username, pin, code, phone, full_name, requested_type]
    );
    await pool.query(
      'INSERT INTO picks (username) VALUES ($1) ON CONFLICT DO NOTHING', [username]
    );
    res.json({ ok: true, username, status: 'pending_approval' });
  } catch (e) {
    if (e.code === '23505') return res.status(400).json({ error: 'Ese usuario ya existe' });
    console.error('signup error:', e);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// Aprobar inscripción (admin)
app.post('/api/users/:username/approve', async (req, res) => {
  try {
    const { is_pro } = req.body || {};
    // Si no se especifica is_pro, se infiere del requested_type
    let proValue = is_pro;
    if (typeof proValue === 'undefined') {
      const u = await pool.query('SELECT requested_type FROM users WHERE username = $1', [req.params.username.toLowerCase()]);
      proValue = u.rows[0]?.requested_type === 'pro';
    }
    const result = await pool.query(
      'UPDATE users SET approved = TRUE, is_pro = $2 WHERE username = $1 RETURNING username, is_pro, full_name',
      [req.params.username.toLowerCase(), !!proValue]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Usuario no encontrado' });
    invalidateRankingCache();
    // Log al Google Sheet (no bloquea el response)
    const u = result.rows[0];
    logToSheet({
      full_name: u.full_name || u.username,
      username: u.username,
      tipo: u.is_pro ? 'Pro' : 'User',
      monto: u.is_pro ? 350 : 99
    });
    res.json({ ok: true, is_pro: u.is_pro });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Upgrade User → Pro (admin marca como pagado)
app.post('/api/users/:username/upgrade-pro', async (req, res) => {
  try {
    // Bloqueo: no se puede upgrade después del 11 jun 2026 1pm CDMX (UTC-6 → 19:00 UTC)
    const cutoff = new Date('2026-06-11T19:00:00Z');
    if (new Date() >= cutoff) {
      return res.status(403).json({ error: 'El upgrade a Pro no está disponible una vez iniciado el torneo' });
    }
    const result = await pool.query(
      'UPDATE users SET is_pro = TRUE WHERE username = $1 AND approved = TRUE RETURNING username, full_name',
      [req.params.username.toLowerCase()]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Usuario no encontrado o no aprobado' });
    invalidateRankingCache();
    // Log al Google Sheet (upgrade = pagó $275 adicionales)
    const u = result.rows[0];
    logToSheet({
      full_name: u.full_name || u.username,
      username: u.username,
      tipo: 'Upgrade User → Pro',
      monto: 275
    });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Rechazar inscripción (admin) — borra al usuario pendiente
app.post('/api/users/:username/reject', async (req, res) => {
  try {
    // Solo permitir borrar usuarios no aprobados y no admin
    await pool.query(
      'DELETE FROM users WHERE username = $1 AND is_admin = FALSE AND approved = FALSE',
      [req.params.username.toLowerCase()]
    );
    invalidateRankingCache();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Revertir aprobación: poner a un usuario aprobado de vuelta como pendiente
// (útil si el admin aprobó por error)
app.post('/api/users/:username/unapprove', async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE users SET approved = FALSE WHERE username = $1 AND is_admin = FALSE RETURNING username',
      [req.params.username.toLowerCase()]
    );
    if (!result.rows.length) return res.status(404).json({ error: 'Usuario no encontrado' });
    invalidateRankingCache();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Eliminar usuario
app.delete('/api/users/:username', async (req, res) => {
  try {
    await pool.query('DELETE FROM users WHERE username = $1 AND is_admin = FALSE',
      [req.params.username]);
    invalidateRankingCache();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Cambiar PIN
app.patch('/api/users/:username/pin', async (req, res) => {
  const { pin } = req.body;
  try {
    await pool.query('UPDATE users SET pin = $1 WHERE username = $2',
      [pin, req.params.username]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  PAYMENT NOTIFICATIONS — usuario avisa que ya pagó
// ══════════════════════════════════════════════════════

// Crear notificación (usuario hace click en "Ya hice mi pago")
app.post('/api/payment-notification', async (req, res) => {
  const { username, context, amount, type } = req.body;
  if(!username) return res.status(400).json({ error: 'username requerido' });
  try {
    const { rows } = await pool.query(
      `INSERT INTO payment_notifications (username, context, payment_type, amount)
       VALUES ($1, $2, $3, $4) RETURNING id, created_at`,
      [String(username).slice(0, 80), String(context || 'signup').slice(0, 30), String(type || '').slice(0, 30), parseInt(amount) || 0]
    );
    res.json({ ok: true, id: rows[0].id, created_at: rows[0].created_at });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Listar notificaciones (admin ve la campana)
app.get('/api/payment-notifications', async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, username, context, payment_type, amount, seen, created_at
       FROM payment_notifications
       ORDER BY created_at DESC LIMIT 100`
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Marcar como vista
app.post('/api/payment-notifications/:id/seen', async (req, res) => {
  try {
    await pool.query('UPDATE payment_notifications SET seen = TRUE WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Marcar todas como vistas
app.post('/api/payment-notifications/seen-all', async (req, res) => {
  try {
    await pool.query('UPDATE payment_notifications SET seen = TRUE WHERE seen = FALSE');
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Eliminar notificación
app.delete('/api/payment-notifications/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM payment_notifications WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  QUALIFIERS — Clasificados oficiales por ronda (admin)
// ══════════════════════════════════════════════════════

// GET: leer todos los clasificados
app.get('/api/qualifiers', async (req, res) => {
  try {
    const rows = await getOficiales();
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// PUT: actualizar la lista de una ronda
app.put('/api/qualifiers/:round', async (req, res) => {
  const round = req.params.round;
  const { teams } = req.body || {};
  // Validar ronda
  if(!['r32','r16','qf','sf','f'].includes(round)){
    return res.status(400).json({ error: 'Ronda inválida' });
  }
  // Validar teams (array de strings)
  if(!Array.isArray(teams)){
    return res.status(400).json({ error: 'teams debe ser un array' });
  }
  // Validar tamaño esperado
  const expected = { r32: 32, r16: 16, qf: 8, sf: 4, f: 2 }[round];
  if(teams.length > expected){
    return res.status(400).json({ error: `Máximo ${expected} equipos para ${round}` });
  }
  try {
    await pool.query(
      `INSERT INTO qualifiers (round, teams, updated_at) VALUES ($1, $2::jsonb, NOW())
       ON CONFLICT (round) DO UPDATE SET teams = $2::jsonb, updated_at = NOW()`,
      [round, JSON.stringify(teams)]
    );
    invalidateRankingCache();
    res.json({ ok: true, round, teams });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET: desglose de clasificados predichos vs oficiales para un usuario
// Devuelve para cada ronda: { predicted: [...], official: [...], hits: [...], bonus: N }
app.get('/api/qualifiers/breakdown/:username', async (req, res) => {
  try {
    const [picksRow, oficiales] = await Promise.all([
      pool.query('SELECT data FROM picks WHERE username = $1', [req.params.username.toLowerCase()]),
      getOficiales()
    ]);
    const picksData = picksRow.rows[0]?.data || { sc:{}, br:{} };
    const result = {};
    let total = 0;
    ['r32','r16','qf','sf','f'].forEach(round => {
      const predicted = Array.from(getUserPredictedQualifiersServer(picksData, round));
      const official = oficiales[round] || [];
      const officialSet = new Set(official);
      const hits = predicted.filter(t => officialSet.has(t));
      const bonus = hits.length * PTS_CLASIFICADOS_SERVER[round];
      total += bonus;
      result[round] = {
        predicted,
        official,
        hits,
        bonus,
        ptsPerHit: PTS_CLASIFICADOS_SERVER[round]
      };
    });
    result.totalBonus = total;
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  QUALIFIERS — END
// ══════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
//  PICKS
// ══════════════════════════════════════════════════════

// Obtener picks de un usuario
app.get('/api/picks/:username', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT data FROM picks WHERE username = $1', [req.params.username]
    );
    res.json(rows[0]?.data || { sc: {}, br: {} });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Guardar picks de un usuario
// Cutoff del torneo (también validado en frontend)
const TOURNAMENT_START_MS_SERVER = Date.parse('2026-06-11T13:00:00-06:00');

app.post('/api/picks/:username', async (req, res) => {
  // Bloqueo defensivo: no aceptar picks después del inicio del torneo
  if (Date.now() >= TOURNAMENT_START_MS_SERVER) {
    return res.status(403).json({ error: 'El torneo ya empezó · Predicciones cerradas' });
  }
  const { data } = req.body;
  try {
    await pool.query(
      `INSERT INTO picks (username, data, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (username) DO UPDATE SET data = $2, updated_at = NOW()`,
      [req.params.username, JSON.stringify(data)]
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Obtener picks de todos (para ranking)
app.get('/api/picks', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT username, data FROM picks');
    const result = {};
    rows.forEach(r => { result[r.username] = r.data; });
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  RANKING — calculado en el servidor
// ══════════════════════════════════════════════════════

const PTS_SERVER = {
  grpResult: 1, grpExact: 2,
  r32:[2,4], r16:[3,6], qf:[5,10], sf:[7,14], tp:[10,20], f:[10,20]
};

// ── BONUS DE CLASIFICACIÓN POR RONDA ──
const PTS_CLASIFICADOS_SERVER = {
  r32: 1, r16: 2, qf: 3, sf: 5, f: 8
};

// ── GRUPOS (debe coincidir con frontend GROUPS) ──
const GROUPS_SERVER = {
  A:['MEX','RSA','KOR','CZE'], B:['CAN','BIH','QAT','SUI'],
  C:['BRA','MAR','HAI','SCO'], D:['USA','PAR','AUS','TUR'],
  E:['GER','CUW','CIV','ECU'], F:['NED','JPN','SWE','TUN'],
  G:['BEL','EGY','IRN','NZL'], H:['ESP','CPV','KSA','URU'],
  I:['FRA','SEN','IRQ','NOR'], J:['ARG','ALG','AUT','JOR'],
  K:['POR','COD','UZB','COL'], L:['ENG','CRO','GHA','PAN']
};

// IDs de los 6 partidos de cada grupo (G1..G6)
function groupMatchIds(g){
  return [`${g}1`,`${g}2`,`${g}3`,`${g}4`,`${g}5`,`${g}6`];
}

// Calcula la tabla de un grupo dado un sc del usuario
function standingsServer(g, sc){
  const teams = GROUPS_SERVER[g];
  const s = {};
  teams.forEach(t => { s[t] = {pts:0,gf:0,ga:0,gd:0}; });
  // Mapeo de partido → equipos según FIFA matchday order
  const [t1,t2,t3,t4] = teams;
  const matches = [
    {id:`${g}1`, h:t1, a:t2}, {id:`${g}2`, h:t3, a:t4},
    {id:`${g}3`, h:t1, a:t3}, {id:`${g}4`, h:t2, a:t4},
    {id:`${g}5`, h:t1, a:t4}, {id:`${g}6`, h:t2, a:t3},
  ];
  matches.forEach(m => {
    const r = sc[m.id];
    if(r == null || r.h == null || r.a == null) return;
    const hg = +r.h || 0, ag = +r.a || 0;
    s[m.h].gf += hg; s[m.h].ga += ag; s[m.h].gd += hg - ag;
    s[m.a].gf += ag; s[m.a].ga += hg; s[m.a].gd += ag - hg;
    if(hg > ag) s[m.h].pts += 3;
    else if(hg < ag) s[m.a].pts += 3;
    else { s[m.h].pts += 1; s[m.a].pts += 1; }
  });
  return teams.slice().sort((a,b) => {
    if(s[b].pts !== s[a].pts) return s[b].pts - s[a].pts;
    if(s[b].gd !== s[a].gd) return s[b].gd - s[a].gd;
    return s[b].gf - s[a].gf;
  }).map(t => ({team:t, ...s[t]}));
}

// THIRD_RULES igual que frontend (artículo 12.6 FIFA 2026)
const THIRD_RULES_SERVER = [
  ['r32_1',  ['A','B','C','D','F']],
  ['r32_4',  ['C','D','F','G','H']],
  ['r32_6',  ['C','E','F','H','I']],
  ['r32_7',  ['E','H','I','J','K']],
  ['r32_8',  ['B','E','F','I','J']],
  ['r32_9',  ['A','E','H','I','J']],
  ['r32_12', ['E','F','G','I','J']],
  ['r32_14', ['D','E','I','J','L']],
];

function assignThirdsServer(rules, best3Sorted, usedGroups, result){
  if(rules.length === 0) return true;
  const sorted = [...rules].sort((a,b) => {
    const ca = a[1].filter(g => !usedGroups.has(g) && best3Sorted.some(x => x.grp === g)).length;
    const cb = b[1].filter(g => !usedGroups.has(g) && best3Sorted.some(x => x.grp === g)).length;
    return ca - cb;
  });
  const [slot, eligible] = sorted[0];
  const rest = sorted.slice(1);
  const candidates = best3Sorted.filter(x => eligible.includes(x.grp) && !usedGroups.has(x.grp));
  for(const cand of candidates){
    usedGroups.add(cand.grp);
    result[slot] = cand.team;
    if(assignThirdsServer(rest, best3Sorted, usedGroups, result)) return true;
    usedGroups.delete(cand.grp);
    delete result[slot];
  }
  return false;
}

// Devuelve los equipos que el usuario predice que clasifican a una ronda
function getUserPredictedQualifiersServer(picksData, round){
  if(!picksData) return new Set();
  const sc = picksData.sc || {};
  const br = picksData.br || {};

  if(round === 'r32'){
    const out = new Set();
    // 2 primeros de cada grupo
    Object.keys(GROUPS_SERVER).forEach(g => {
      const ids = groupMatchIds(g);
      const played = ids.filter(id => sc[id] != null).length;
      if(played === 0) return;
      const st = standingsServer(g, sc);
      if(st[0]) out.add(st[0].team);
      if(st[1]) out.add(st[1].team);
    });
    // 8 mejores terceros con backtracking
    const thirds = [];
    Object.keys(GROUPS_SERVER).forEach(g => {
      const ids = groupMatchIds(g);
      const played = ids.filter(id => sc[id] != null).length;
      if(played === 0) return;
      const st = standingsServer(g, sc);
      const t = st[2];
      if(t) thirds.push({team:t.team, pts:t.pts, gd:t.gd, gf:t.gf, grp:g});
    });
    thirds.sort((a,b) => b.pts !== a.pts ? b.pts - a.pts : b.gd !== a.gd ? b.gd - a.gd : b.gf - a.gf);
    const top8 = thirds.slice(0, 8);
    const result = {};
    assignThirdsServer(THIRD_RULES_SERVER, top8, new Set(), result);
    Object.values(result).forEach(team => { if(team) out.add(team); });
    return out;
  }

  // Para r16/qf/sf/f: leer winners del bracket en la ronda anterior
  const sourceRound = round === 'r16' ? 'r32'
                    : round === 'qf'  ? 'r16'
                    : round === 'sf'  ? 'qf'
                    : round === 'f'   ? 'sf'
                    : null;
  if(!sourceRound) return new Set();
  const out = new Set();
  Object.entries(br).forEach(([id, team]) => {
    if(id.startsWith(sourceRound + '_') && team) out.add(team);
  });
  return out;
}

// Calcula el bonus total de clasificación de un usuario dado los oficiales
function calcClasificadosBonusServer(picksData, oficiales){
  if(!oficiales) return 0;
  let total = 0;
  Object.keys(PTS_CLASIFICADOS_SERVER).forEach(round => {
    const realList = oficiales[round];
    if(!Array.isArray(realList) || realList.length === 0) return;
    const predicted = getUserPredictedQualifiersServer(picksData, round);
    let hits = 0;
    realList.forEach(team => { if(predicted.has(team)) hits++; });
    total += hits * PTS_CLASIFICADOS_SERVER[round];
  });
  return total;
}

function calcScoreServer(picksData, results, oficiales) {
  let gr = 0, br = 0;
  const up = picksData || { sc: {}, br: {} };

  // Grupos
  if (results.sc) {
    Object.entries(results.sc).forEach(([id, rr]) => {
      if (rr?.h == null || rr?.a == null) return;
      const ms = up.sc?.[id];
      if (!ms) return;
      const rRes = rr.h > rr.a ? 'h' : rr.h < rr.a ? 'a' : 'e';
      const mRes = ms.h > ms.a ? 'h' : ms.h < ms.a ? 'a' : 'e';
      if (rRes === mRes) {
        gr += PTS_SERVER.grpResult;
        if (+ms.h === rr.h && +ms.a === rr.a) gr += PTS_SERVER.grpExact;
      }
    });
  }

  // Eliminatoria
  if (results.bracket) {
    Object.entries(results.bracket).forEach(([id, rr]) => {
      if (!rr?.winner) return;
      const rk = id.split('_')[0];
      const [winPts, exactBonus] = PTS_SERVER[rk] || [0, 0];
      const mw = up.br?.[id];
      if (!mw) return;
      if (mw === rr.winner) {
        br += winPts;
        const ms = up.sc?.[id];
        if (ms && rr.h != null && +ms.h === rr.h && +ms.a === rr.a) br += exactBonus;
      }
    });
  }

  // Bonus de clasificación por ronda (oficiales marcados por admin)
  const clasifBonus = calcClasificadosBonusServer(up, oficiales);

  return { grupos: gr, bracket: br + clasifBonus, total: gr + br + clasifBonus, clasificados: clasifBonus };
}

// ══════════════════════════════════════════════════════
//  RANKING CACHE
// ══════════════════════════════════════════════════════
let _rankingCache = null;
let _rankingCacheAt = 0;
const RANKING_TTL = 2 * 60 * 1000; // 2 minutos

// Helper: obtener oficiales (clasificados) como objeto { r32: [...], r16: [...], ... }
async function getOficiales(){
  try {
    const { rows } = await pool.query('SELECT round, teams FROM qualifiers');
    const out = {};
    rows.forEach(r => { out[r.round] = Array.isArray(r.teams) ? r.teams : []; });
    return out;
  } catch(e){
    return {};
  }
}

async function buildRanking() {
  const [picksRows, resultsRow, usersRow, oficiales] = await Promise.all([
    pool.query('SELECT username, data FROM picks'),
    pool.query('SELECT data FROM results WHERE id = 1'),
    pool.query('SELECT username, is_admin, approved, is_pro FROM users'),
    getOficiales()
  ]);
  const results = resultsRow.rows[0]?.data || {};
  const picksMap = new Map(picksRows.rows.map(r => [r.username, r.data]));
  const board = usersRow.rows
    .filter(u => u.is_admin !== true && u.approved !== false && u.is_pro !== false)
    .map(u => ({
      name: u.username,
      ...calcScoreServer(picksMap.get(u.username) || { sc: {}, br: {} }, results, oficiales)
    }))
    .sort((a, b) => b.total - a.total);
  _rankingCache = board;
  _rankingCacheAt = Date.now();
  return board;
}

// Ranking simulado para Users (incluye TODOS los aprobados, Pros + Users)
async function buildSimulatedRanking() {
  const [picksRows, resultsRow, usersRow, oficiales] = await Promise.all([
    pool.query('SELECT username, data FROM picks'),
    pool.query('SELECT data FROM results WHERE id = 1'),
    pool.query('SELECT username, is_admin, approved FROM users'),
    getOficiales()
  ]);
  const results = resultsRow.rows[0]?.data || {};
  const picksMap = new Map(picksRows.rows.map(r => [r.username, r.data]));
  return usersRow.rows
    .filter(u => u.is_admin !== true && u.approved !== false)
    .map(u => ({
      name: u.username,
      ...calcScoreServer(picksMap.get(u.username) || { sc: {}, br: {} }, results, oficiales)
    }))
    .sort((a, b) => b.total - a.total);
}

function invalidateRankingCache() {
  _rankingCache = null;
  _rankingCacheAt = 0;
}

// ── Google Sheets logging ──
// Manda los datos del usuario aprobado a un Google Apps Script que los escribe en una Sheet.
// Configurar SHEET_WEBHOOK_URL y SHEET_TOKEN como variables de entorno en Railway.
// Si no están configuradas, simplemente no hace nada (no crashea).
async function logToSheet(payload) {
  const url = process.env.SHEET_WEBHOOK_URL;
  const token = process.env.SHEET_TOKEN;
  if (!url || !token) {
    // No configurado, silencioso
    return;
  }
  try {
    // Node 18+ tiene fetch nativo
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, token }),
      // Timeout de 5s para no bloquear el flujo principal si Apps Script tarda
      signal: AbortSignal.timeout ? AbortSignal.timeout(5000) : undefined
    });
  } catch (e) {
    // No queremos que un error del Sheet afecte la aprobación
    console.error('[logToSheet] Error:', e.message);
  }
}

// Endpoint de "backfill" — manda al Google Sheet TODOS los usuarios ya aprobados.
// Útil para poblar el sheet con los usuarios anteriores a la integración.
// Protegido por SHEET_TOKEN (la misma que tienes configurada en Railway).
// Uso: POST /api/admin/sheet-backfill con header X-Sheet-Token: tu_token
app.post('/api/admin/sheet-backfill', async (req, res) => {
  const token = req.headers['x-sheet-token'] || req.body?.token;
  if (!token || token !== process.env.SHEET_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const { rows } = await pool.query(
      `SELECT username, full_name, is_pro, created_at
       FROM users
       WHERE approved = TRUE AND is_admin = FALSE
       ORDER BY created_at ASC`
    );
    let count = 0;
    for (const u of rows) {
      await logToSheet({
        full_name: u.full_name || u.username,
        username: u.username,
        tipo: u.is_pro ? 'Pro' : 'User',
        monto: u.is_pro ? 350 : 99
      });
      count++;
      // Pequeña pausa para no saturar el Apps Script (max ~6 req/seg)
      await new Promise(r => setTimeout(r, 200));
    }
    res.json({ ok: true, total: count });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/ranking', async (req, res) => {
  try {
    const now = Date.now();
    if(_rankingCache && (now - _rankingCacheAt) < RANKING_TTL){
      return res.json(_rankingCache);
    }
    const board = await buildRanking();
    res.json(board);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Ranking simulado (incluye Users + Pros) para mostrar a Users
// "Si fueras Pro, estarías en el lugar #X"
app.get('/api/ranking/simulated', async (req, res) => {
  try {
    const board = await buildSimulatedRanking();
    res.json(board);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  RESULTADOS (admin)
// ══════════════════════════════════════════════════════

app.get('/api/results', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT data FROM results WHERE id = 1');
    res.json(rows[0]?.data || {});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/results', async (req, res) => {
  const { data } = req.body;
  try {
    await pool.query(
      `INSERT INTO results (id, data, updated_at)
       VALUES (1, $1, NOW())
       ON CONFLICT (id) DO UPDATE SET data = $1, updated_at = NOW()`,
      [JSON.stringify(data)]
    );
    res.json({ ok: true });
    invalidateRankingCache();
    // Rebuild cache in background for next request
    buildRanking().catch(()=>{});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Register referral separately (from welcome modal)
app.post('/api/refs_register', async (req, res) => {
  const { username, refCode } = req.body;
  if (!username || !refCode) return res.json({ ok: false });
  try {
    const ref = await pool.query(
      'SELECT username FROM users WHERE code = $1', [refCode.toUpperCase()]
    );
    if (ref.rows.length && ref.rows[0].username !== username) {
      await pool.query(
        'INSERT INTO refs (referrer_code, referred_username) VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [refCode.toUpperCase(), username]
      );
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
//  MURO
// ══════════════════════════════════════════════════════

// El muro NO usa cache para garantizar que cada poll devuelva datos frescos.
// Si el polling crea carga, ajustar el TTL aquí más adelante.
function invalidateWallCache(){ /* no-op por ahora */ }

// Get all posts with reactions and comment counts
app.get('/api/wall', async (req, res) => {
  // Anti-cache headers — garantiza que el polling siempre reciba datos frescos,
  // no respuestas 304 ni cache de proxies/browser
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  try {
    const { rows: posts } = await pool.query(`
      SELECT p.id, p.username, p.content, p.deleted, p.muted, p.created_at,
             COUNT(DISTINCT c.id) FILTER (WHERE c.deleted=FALSE AND c.parent_id IS NULL) as comment_count
      FROM wall_posts p
      LEFT JOIN wall_comments c ON c.post_id = p.id
      WHERE p.deleted = FALSE AND p.muted = FALSE
      GROUP BY p.id
      ORDER BY p.created_at DESC
      LIMIT 100
    `);

    const { rows: reactions } = await pool.query(`
      SELECT post_id, emoji, COUNT(*) as count, array_agg(username) as users
      FROM wall_reactions
      WHERE post_id = ANY($1)
      GROUP BY post_id, emoji
    `, [posts.map(p=>p.id)]);

    const reactionMap = {};
    reactions.forEach(r => {
      if(!reactionMap[r.post_id]) reactionMap[r.post_id] = [];
      reactionMap[r.post_id].push({ emoji: r.emoji, count: parseInt(r.count), users: r.users });
    });

    res.json(posts.map(p => ({ ...p, reactions: reactionMap[p.id] || [] })));
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Create post
app.post('/api/wall', async (req, res) => {
  const { username, content } = req.body;
  if(!username||!content?.trim()) return res.status(400).json({ error: 'Faltan datos' });
  try {
    // Check if muted
    const { rows } = await pool.query('SELECT muted FROM wall_posts WHERE username=$1 AND muted=TRUE LIMIT 1', [username]);
    if(rows.length) return res.status(403).json({ error: 'Tu acceso al muro está desactivado' });
    const { rows: post } = await pool.query(
      'INSERT INTO wall_posts (username, content) VALUES ($1, $2) RETURNING *',
      [username, content.trim().slice(0,500)]
    );
    invalidateWallCache();
    res.json(post[0]);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Delete post (own or admin)
app.delete('/api/wall/:id', async (req, res) => {
  const { username, isAdmin } = req.body;
  try {
    const { rows } = await pool.query('SELECT username, delete_count FROM wall_posts WHERE id=$1', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Post no encontrado' });
    const post = rows[0];
    if(!isAdmin && post.username !== username) return res.status(403).json({ error: 'Sin permiso' });

    if(isAdmin){
      const newCount = post.delete_count + 1;
      const muted = newCount >= 2;
      await pool.query(
        'UPDATE wall_posts SET deleted=TRUE, delete_count=$1 WHERE id=$2', [newCount, req.params.id]
      );
      if(muted){
        // Mute all posts from this user
        await pool.query('UPDATE wall_posts SET muted=TRUE WHERE username=$1', [post.username]);
      }
      invalidateWallCache();
      res.json({ ok: true, muted, deleteCount: newCount });
    } else {
      await pool.query('UPDATE wall_posts SET deleted=TRUE WHERE id=$1 AND username=$2', [req.params.id, username]);
      invalidateWallCache();
      res.json({ ok: true });
    }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Toggle reaction
app.post('/api/wall/:id/react', async (req, res) => {
  const { username, emoji } = req.body;
  if(!username||!emoji) return res.status(400).json({ error: 'Faltan datos' });
  try {
    const existing = await pool.query(
      'SELECT emoji FROM wall_reactions WHERE post_id=$1 AND username=$2',
      [req.params.id, username]
    );
    const prevEmoji = existing.rows[0]?.emoji;
    if(prevEmoji === emoji){
      // Same emoji — toggle off
      await pool.query('DELETE FROM wall_reactions WHERE post_id=$1 AND username=$2',
        [req.params.id, username]);
      invalidateWallCache();
      res.json({ action: 'removed' });
    } else if(prevEmoji){
      // Different emoji — update
      await pool.query('UPDATE wall_reactions SET emoji=$3 WHERE post_id=$1 AND username=$2',
        [req.params.id, username, emoji]);
      invalidateWallCache();
      res.json({ action: 'updated' });
    } else {
      // No existing reaction — insert
      await pool.query('INSERT INTO wall_reactions (post_id, username, emoji) VALUES ($1,$2,$3)',
        [req.params.id, username, emoji]);
      invalidateWallCache();
      res.json({ action: 'added' });
    }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Get comments for a post
app.get('/api/wall/:id/comments', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT id, post_id, parent_id, username, content, deleted, created_at
      FROM wall_comments
      WHERE post_id=$1 AND deleted=FALSE
      ORDER BY created_at ASC
    `, [req.params.id]);
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Add comment
app.post('/api/wall/:id/comments', async (req, res) => {
  const { username, content, parent_id } = req.body;
  if(!username||!content?.trim()) return res.status(400).json({ error: 'Faltan datos' });
  try {
    const { rows } = await pool.query(
      'INSERT INTO wall_comments (post_id, parent_id, username, content) VALUES ($1,$2,$3,$4) RETURNING *',
      [req.params.id, parent_id||null, username, content.trim().slice(0,500)]
    );
    invalidateWallCache();
    res.json(rows[0]);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Delete comment (own or admin)
app.delete('/api/wall/comment/:id', async (req, res) => {
  await deleteCommentHandler(req, res);
});

// Alias plural route — delega al singular
app.delete('/api/wall/comments/:id', async (req, res) => {
  await deleteCommentHandler(req, res);
});

async function deleteCommentHandler(req, res){
  const { username, is_admin, isAdmin } = req.body;
  const admin = is_admin || isAdmin;
  try {
    const { rows } = await pool.query('SELECT username, post_id FROM wall_comments WHERE id=$1 AND deleted=FALSE', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Comentario no encontrado' });
    const comment = rows[0];
    if(!admin && comment.username !== username) return res.status(403).json({ error: 'Sin permiso' });

    if(admin && comment.username !== username){
      // Add strike
      await pool.query(`
        INSERT INTO wall_strikes (username, strikes) VALUES ($1, 1)
        ON CONFLICT (username) DO UPDATE
        SET strikes = wall_strikes.strikes + 1,
            muted = CASE WHEN wall_strikes.strikes + 1 >= 2 THEN TRUE ELSE wall_strikes.muted END
      `, [comment.username]);
    }
    await pool.query('DELETE FROM wall_comments WHERE id=$1', [req.params.id]);
    invalidateWallCache();
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
}

// ══════════════════════════════════════════════════════
//  REFERIDOS
// ══════════════════════════════════════════════════════

// Get ALL refs grouped by code (for admin panel)
// Verificar si un usuario ya tiene referidor
app.get('/api/refs/check/:username', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT referrer_code FROM refs WHERE referred_username = $1',
      [req.params.username]
    );
    res.json({ hasReferrer: rows.length > 0 });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/refs', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT referrer_code, referred_username FROM refs');
    const result = {};
    rows.forEach(r => {
      if (!result[r.referrer_code]) result[r.referrer_code] = [];
      result[r.referrer_code].push(r.referred_username);
    });
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/refs/:code', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT referred_username FROM refs WHERE referrer_code = $1',
      [req.params.code.toUpperCase()]
    );
    res.json(rows.map(r => r.referred_username));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  GRUPOS
// ══════════════════════════════════════════════════════

// Generar código único de 6 caracteres
function genGroupCode(){
  return Math.random().toString(36).substring(2,8).toUpperCase();
}

// Crear grupo
app.post('/api/groups', async (req, res) => {
  const { name, username } = req.body;
  if(!name||!username) return res.status(400).json({error:'Faltan datos'});
  let code, attempts=0;
  do {
    code = genGroupCode();
    attempts++;
    if(attempts>10) return res.status(500).json({error:'No se pudo generar código único'});
    const exists = await pool.query('SELECT id FROM groups_q WHERE code=$1',[code]);
    if(!exists.rows.length) break;
  } while(true);

  try {
    const { rows } = await pool.query(
      'INSERT INTO groups_q (name,code,owner) VALUES ($1,$2,$3) RETURNING *',
      [name, code, username]
    );
    const g = rows[0];
    // El creador automáticamente es miembro
    await pool.query(
      'INSERT INTO group_members (group_id,username) VALUES ($1,$2) ON CONFLICT DO NOTHING',
      [g.id, username]
    );
    res.json({id:g.id, name:g.name, code:g.code, owner:g.owner});
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// Unirse a un grupo por código
app.post('/api/groups/join', async (req, res) => {
  const { code, username } = req.body;
  if(!code||!username) return res.status(400).json({error:'Faltan datos'});
  try {
    const { rows } = await pool.query(
      'SELECT * FROM groups_q WHERE code=$1', [code.toUpperCase()]
    );
    if(!rows.length) return res.status(404).json({error:'Código incorrecto — grupo no encontrado'});
    const g = rows[0];
    await pool.query(
      'INSERT INTO group_members (group_id,username) VALUES ($1,$2) ON CONFLICT DO NOTHING',
      [g.id, username]
    );
    res.json({id:g.id, name:g.name, code:g.code, owner:g.owner});
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// Obtener grupos de un usuario
app.get('/api/groups/user/:username', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT g.id, g.name, g.code, g.owner, g.created_at,
             COUNT(gm2.username) as member_count
      FROM groups_q g
      JOIN group_members gm ON gm.group_id = g.id AND gm.username = $1
      JOIN group_members gm2 ON gm2.group_id = g.id
      GROUP BY g.id
      ORDER BY g.created_at ASC
    `, [req.params.username]);
    res.json(rows);
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// Obtener miembros y picks de un grupo (para ranking)
app.get('/api/groups/:id/ranking', async (req, res) => {
  try {
    const { rows: members } = await pool.query(`
      SELECT gm.username FROM group_members gm
      WHERE gm.group_id = $1
    `, [req.params.id]);
    const usernames = members.map(m=>m.username);
    // Get picks for all members
    const picksResult = usernames.length
      ? await pool.query('SELECT username, data FROM picks WHERE username = ANY($1)', [usernames])
      : {rows:[]};
    const picks = {};
    picksResult.rows.forEach(r=>{ picks[r.username]=r.data; });
    res.json({members: usernames, picks});
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// Eliminar miembro del grupo (solo el owner)
app.delete('/api/groups/:id/member/:username', async (req, res) => {
  const { requester } = req.body;
  try {
    const { rows } = await pool.query('SELECT owner FROM groups_q WHERE id=$1',[req.params.id]);
    if(!rows.length) return res.status(404).json({error:'Grupo no encontrado'});
    if(rows[0].owner!==requester) return res.status(403).json({error:'Solo el creador puede eliminar miembros'});
    if(req.params.username===requester) return res.status(400).json({error:'No puedes eliminarte a ti mismo'});
    await pool.query('DELETE FROM group_members WHERE group_id=$1 AND username=$2',[req.params.id, req.params.username]);
    res.json({ok:true});
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// Salir de un grupo
app.delete('/api/groups/:id/leave', async (req, res) => {
  const { username } = req.body;
  try {
    const { rows } = await pool.query('SELECT owner FROM groups_q WHERE id=$1',[req.params.id]);
    if(!rows.length) return res.status(404).json({error:'Grupo no encontrado'});
    if(rows[0].owner===username) return res.status(400).json({error:'El creador no puede abandonar el grupo'});
    await pool.query('DELETE FROM group_members WHERE group_id=$1 AND username=$2',[req.params.id, username]);
    res.json({ok:true});
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// Eliminar grupo (solo el creador)
app.delete('/api/groups/:id', async (req, res) => {
  const { username } = req.body;
  try {
    const { rows } = await pool.query('SELECT owner FROM groups_q WHERE id=$1',[req.params.id]);
    if(!rows.length) return res.status(404).json({error:'Grupo no encontrado'});
    if(rows[0].owner!==username) return res.status(403).json({error:'Solo el creador puede eliminar el grupo'});
    await pool.query('DELETE FROM groups_q WHERE id=$1',[req.params.id]);
    res.json({ok:true});
  } catch(e) {
    res.status(500).json({error:e.message});
  }
});

// ══════════════════════════════════════════════════════
//  MURO — STRIKES Y MUTE
// ══════════════════════════════════════════════════════

// Get user strike status
app.get('/api/wall/strikes/:username', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT strikes, muted FROM wall_strikes WHERE username=$1', [req.params.username]);
    res.json(rows[0] || { strikes: 0, muted: false });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Admin: unmute user
app.post('/api/wall/unmute', async (req, res) => {
  const { username } = req.body;
  try {
    await pool.query('UPDATE wall_strikes SET muted=FALSE, strikes=0 WHERE username=$1', [username]);
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  RANKING HISTORY
// ══════════════════════════════════════════════════════

// Guardar snapshot del ranking (lo llama el admin)
app.post('/api/ranking/snapshot', async (req, res) => {
  const { label } = req.body;
  if(!label) return res.status(400).json({ error: 'Se requiere un label' });
  try {
    const board = await buildRanking();
    await pool.query(
      'INSERT INTO ranking_history (snapshot, label) VALUES ($1, $2)',
      [JSON.stringify(board), label]
    );
    res.json({ ok: true, count: board.length });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Obtener todos los snapshots
app.get('/api/ranking/history', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, label, created_at, snapshot FROM ranking_history ORDER BY created_at ASC'
    );
    res.json(rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Eliminar un snapshot
app.delete('/api/ranking/snapshot/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM ranking_history WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  ESTADÍSTICAS GLOBALES
// ══════════════════════════════════════════════════════
app.get('/api/stats', async (req, res) => {
  try {
    const [picksRows, resultsRow, usersRow, oficiales] = await Promise.all([
      pool.query('SELECT username, data FROM picks'),
      pool.query('SELECT data FROM results WHERE id = 1'),
      pool.query('SELECT username, is_admin, is_pro FROM users'),
      getOficiales()
    ]);

    const results = resultsRow.rows[0]?.data || {};
    const admins = new Set(usersRow.rows.filter(u => u.is_admin).map(u => u.username));
    const proSet = new Set(usersRow.rows.filter(u => u.is_pro !== false).map(u => u.username));
    // Solo Pros entran a stats globales (Users no participan en bolsa ni stats globales)
    const allPicksRaw = picksRows.rows.filter(r => !admins.has(r.username) && proSet.has(r.username));
    const totalRegistered = allPicksRaw.length;

    // ── Filtro: SOLO usuarios con bracket completo aparecen en stats ──
    function hasBracketComplete(picksData){
      const br = picksData?.br || {};
      return Object.keys(br).length >= 32;
    }
    const allPicks = allPicksRaw.filter(p => hasBracketComplete(p.data));
    const total = allPicks.length;

    if(!total) return res.json({
      empty: true,
      totalRegistered,
      eligibleCount: 0,
      message: 'Sin jugadores con bracket completo todavía'
    });

    const rSC = results.sc || {};
    const rBR = results.bracket || {};

    // 1. Aciertos y exactos por partido de grupos
    const matchStats = {};
    Object.entries(rSC).forEach(([id, rr]) => {
      if(rr?.h==null || rr?.a==null) return;
      const rRes = rr.h>rr.a?'h':rr.h<rr.a?'a':'e';
      let correct=0, exact=0, picked=0;
      allPicks.forEach(p => {
        const ms = p.data?.sc?.[id];
        if(!ms) return;
        picked++;
        const mRes = +ms.h>+ms.a?'h':+ms.h<+ms.a?'a':'e';
        if(mRes===rRes) correct++;
        if(+ms.h===rr.h && +ms.a===rr.a) exact++;
      });
      if(picked>0) matchStats[id] = { correct, exact, picked, pct: Math.round(correct/picked*100) };
    });

    // 2. Partido más acertado y más exacto
    const sortedByPct = Object.entries(matchStats).sort((a,b)=>b[1].pct-a[1].pct);
    const sortedByExact = Object.entries(matchStats).sort((a,b)=>b[1].exact-a[1].exact);
    const mostCorrect = sortedByPct[0] ? { id: sortedByPct[0][0], ...sortedByPct[0][1] } : null;
    const mostExact = sortedByExact[0] ? { id: sortedByExact[0][0], ...sortedByExact[0][1] } : null;
    const leastCorrect = sortedByPct.length ? { id: sortedByPct[sortedByPct.length-1][0], ...sortedByPct[sortedByPct.length-1][1] } : null;

    // 3. Equipo más votado como campeón (ganador de la FINAL = f_0)
    // IMPORTANTE: el ID de la final es 'f_0'. NO tomar el último key alfabético
    // porque 'tp_0' (3er lugar) viene después de 'f_0' alfabéticamente.
    const champVotes = {};
    allPicks.forEach(p => {
      const br = p.data?.br || {};
      const champion = br['f_0'];
      if(champion){
        champVotes[champion] = (champVotes[champion]||0) + 1;
      }
    });
    const topChamp = Object.entries(champVotes).sort((a,b)=>b[1]-a[1]).slice(0,3)
      .map(([team, votes]) => ({ team, votes, pct: Math.round(votes/total*100) }));

    // 4. Exactos en grupos por usuario
    const exactByUser = allPicks.map(p => {
      let ex=0;
      Object.entries(rSC).forEach(([id,rr]) => {
        if(rr?.h==null||rr?.a==null) return;
        const ms = p.data?.sc?.[id];
        if(ms && +ms.h===rr.h && +ms.a===rr.a) ex++;
      });
      return { name: p.username, exact: ex };
    }).sort((a,b)=>b.exact-a.exact).filter(u=>u.exact>0).slice(0,5);

    // 5. % acierto global en grupos
    let totalCorrect=0, totalPossible=0;
    allPicks.forEach(p => {
      Object.entries(rSC).forEach(([id,rr]) => {
        if(rr?.h==null||rr?.a==null) return;
        const ms = p.data?.sc?.[id];
        if(!ms) return;
        totalPossible++;
        const rRes = rr.h>rr.a?'h':rr.h<rr.a?'a':'e';
        const mRes = +ms.h>+ms.a?'h':+ms.h<+ms.a?'a':'e';
        if(mRes===rRes) totalCorrect++;
      });
    });
    const globalPct = totalPossible>0 ? Math.round(totalCorrect/totalPossible*100) : 0;

    // 6. Partidos jugados con resultados
    const matchesWithResults = Object.keys(rSC).filter(id => rSC[id]?.h!=null).length;
    const bracketWithResults = Object.keys(rBR).filter(id => rBR[id]?.winner).length;

    // 7. La Tumba — el de menos puntos (todos ya tienen bracket completo por el filtro inicial)
    let tumba = null;
    if(allPicks.length){
      const ranked = allPicks.map(p=>({name:p.username,...calcScoreServer(p.data,results,oficiales)}))
        .sort((a,b)=>a.total-b.total);
      tumba = ranked[0];
    }

    // 8. El Básico — quien más veces puso 2-0
    const basicoCounts = allPicks.map(p=>{
      let count=0;
      Object.values(p.data?.sc||{}).forEach(ms=>{
        if(+ms.h===2 && +ms.a===0) count++;
      });
      return { name: p.username, count };
    }).sort((a,b)=>b.count-a.count).filter(u=>u.count>0);
    const basico = basicoCounts[0] || null;

    // 9. El más goleador — quien predijo más goles en total
    const goleadorCounts = allPicks.map(p=>{
      let goals=0;
      Object.values(p.data?.sc||{}).forEach(ms=>{
        goals += (+ms.h||0) + (+ms.a||0);
      });
      return { name: p.username, goals };
    }).sort((a,b)=>b.goals-a.goals);
    const goleador = goleadorCounts[0] || null;

    // 10. El Aburrido — quien predijo menos goles en total
    const aburrido = goleadorCounts.length ? goleadorCounts[goleadorCounts.length-1] : null;

    res.json({
      total,
      totalRegistered,
      eligibleCount: total,
      matchesWithResults,
      bracketWithResults,
      globalPct,
      mostCorrect,
      mostExact,
      leastCorrect,
      topChamp,
      exactByUser,
      tumba,
      basico,
      goleador,
      aburrido
    });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// ══════════════════════════════════════════════════════
//  USUARIOS CONECTADOS — SSE
// ══════════════════════════════════════════════════════
const onlineUsers = new Map(); // username -> { res, lastSeen }

function broadcastOnlineCount() {
  const count = onlineUsers.size;
  const msg = `data: ${JSON.stringify({ type: 'online_count', count })}\n\n`;
  onlineUsers.forEach(({ res }) => {
    try { res.write(msg); } catch(e) {}
  });
}

app.get('/api/online', (req, res) => {
  const username = req.query.u || 'anon';
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.flushHeaders();

  // Send current count immediately
  res.write(`data: ${JSON.stringify({ type: 'online_count', count: onlineUsers.size + 1 })}\n\n`);

  // Register user
  onlineUsers.set(username, { res, lastSeen: Date.now() });
  broadcastOnlineCount();

  // Keep alive every 20s
  const keepAlive = setInterval(() => {
    try { res.write('data: {"type":"ping"}\n\n'); } catch(e) {}
  }, 20000);

  req.on('close', () => {
    clearInterval(keepAlive);
    onlineUsers.delete(username);
    broadcastOnlineCount();
  });
});

// Simple count endpoint for polling fallback
app.get('/api/online/count', (req, res) => {
  res.json({ count: onlineUsers.size });
});

// ══════════════════════════════════════════════════════
//  START
// ══════════════════════════════════════════════════════
const PORT = process.env.PORT || 3000;
initDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Al Ángulo backend corriendo en puerto ${PORT}`));
}).catch(e => {
  console.error('Error iniciando DB:', e);
  process.exit(1);
});
