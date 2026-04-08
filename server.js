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
      PRIMARY KEY (post_id, username, emoji)
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

    CREATE TABLE IF NOT EXISTS wall_posts (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      content TEXT NOT NULL,
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
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS wall_strikes (
      username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
      strikes INT NOT NULL DEFAULT 0,
      muted BOOLEAN DEFAULT FALSE,
      PRIMARY KEY (username)
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
      'SELECT username, is_admin, code FROM users ORDER BY created_at'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Crear usuario
app.post('/api/users', async (req, res) => {
  const { username, pin, code } = req.body;
  try {
    await pool.query(
      'INSERT INTO users (username, pin, is_admin, code) VALUES ($1, $2, FALSE, $3)',
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

// Eliminar usuario
app.delete('/api/users/:username', async (req, res) => {
  try {
    await pool.query('DELETE FROM users WHERE username = $1 AND is_admin = FALSE',
      [req.params.username]);
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
app.post('/api/picks/:username', async (req, res) => {
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
  r32:[2,4], r16:[3,6], qf:[5,10], sf:[7,14], f:[10,20]
};

function calcScoreServer(picksData, results) {
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

  return { grupos: gr, bracket: br, total: gr + br };
}

// ══════════════════════════════════════════════════════
//  RANKING CACHE
// ══════════════════════════════════════════════════════
let _rankingCache = null;
let _rankingCacheAt = 0;
const RANKING_TTL = 2 * 60 * 1000; // 2 minutos

async function buildRanking() {
  const [picksRows, resultsRow, usersRow] = await Promise.all([
    pool.query('SELECT username, data FROM picks'),
    pool.query('SELECT data FROM results WHERE id = 1'),
    pool.query('SELECT username, is_admin FROM users')
  ]);
  const results = resultsRow.rows[0]?.data || {};
  const admins = new Set(usersRow.rows.filter(u => u.is_admin).map(u => u.username));
  const board = picksRows.rows
    .filter(r => !admins.has(r.username))
    .map(r => ({ name: r.username, ...calcScoreServer(r.data, results) }))
    .sort((a, b) => b.total - a.total);
  _rankingCache = board;
  _rankingCacheAt = Date.now();
  return board;
}

function invalidateRankingCache() {
  _rankingCache = null;
  _rankingCacheAt = 0;
}

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

// Get all posts with reactions and comment counts
app.get('/api/wall', async (req, res) => {
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
      res.json({ ok: true, muted, deleteCount: newCount });
    } else {
      await pool.query('UPDATE wall_posts SET deleted=TRUE WHERE id=$1 AND username=$2', [req.params.id, username]);
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
      'SELECT 1 FROM wall_reactions WHERE post_id=$1 AND username=$2 AND emoji=$3',
      [req.params.id, username, emoji]
    );
    if(existing.rows.length){
      await pool.query('DELETE FROM wall_reactions WHERE post_id=$1 AND username=$2 AND emoji=$3',
        [req.params.id, username, emoji]);
      res.json({ action: 'removed' });
    } else {
      await pool.query('INSERT INTO wall_reactions (post_id, username, emoji) VALUES ($1,$2,$3)',
        [req.params.id, username, emoji]);
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
    res.json(rows[0]);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Delete comment (own or admin)
app.delete('/api/wall/comment/:id', async (req, res) => {
  const { username, isAdmin } = req.body;
  try {
    const { rows } = await pool.query('SELECT username, delete_count, post_id FROM wall_comments WHERE id=$1', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Comentario no encontrado' });
    const comment = rows[0];
    if(!isAdmin && comment.username !== username) return res.status(403).json({ error: 'Sin permiso' });

    if(isAdmin){
      const newCount = comment.delete_count + 1;
      const muted = newCount >= 2;
      await pool.query('UPDATE wall_comments SET deleted=TRUE, delete_count=$1 WHERE id=$2', [newCount, req.params.id]);
      if(muted){
        await pool.query('UPDATE wall_posts SET muted=TRUE WHERE username=$1', [comment.username]);
        await pool.query('UPDATE wall_comments SET deleted=TRUE WHERE username=$1', [comment.username]);
      }
      res.json({ ok: true, muted, deleteCount: newCount });
    } else {
      await pool.query('UPDATE wall_comments SET deleted=TRUE WHERE id=$1 AND username=$2', [req.params.id, username]);
      res.json({ ok: true });
    }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

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
//  MURO — WALL
// ══════════════════════════════════════════════════════

// Get all posts with reactions and comments
app.get('/api/wall', async (req, res) => {
  try {
    const { rows: posts } = await pool.query(
      'SELECT id, username, content, created_at FROM wall_posts ORDER BY created_at DESC LIMIT 50'
    );
    if(!posts.length) return res.json([]);

    const postIds = posts.map(p => p.id);

    const [reactRows, commentRows, strikeRows] = await Promise.all([
      pool.query('SELECT post_id, username, emoji FROM wall_reactions WHERE post_id = ANY($1)', [postIds]),
      pool.query('SELECT id, post_id, parent_id, username, content, created_at FROM wall_comments WHERE post_id = ANY($1) ORDER BY created_at ASC', [postIds]),
      pool.query('SELECT username, muted FROM wall_strikes')
    ]);

    const mutedSet = new Set(strikeRows.rows.filter(r=>r.muted).map(r=>r.username));

    // Group reactions by post
    const reactionsByPost = {};
    reactRows.rows.forEach(r => {
      if(!reactionsByPost[r.post_id]) reactionsByPost[r.post_id] = [];
      reactionsByPost[r.post_id].push({ username: r.username, emoji: r.emoji });
    });

    // Group comments by post
    const commentsByPost = {};
    commentRows.rows.forEach(c => {
      if(!commentsByPost[c.post_id]) commentsByPost[c.post_id] = [];
      commentsByPost[c.post_id].push(c);
    });

    const result = posts.map(p => ({
      ...p,
      muted: mutedSet.has(p.username),
      reactions: reactionsByPost[p.id] || [],
      comments: commentsByPost[p.id] || []
    }));

    res.json(result);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Create post
app.post('/api/wall', async (req, res) => {
  const { username, content } = req.body;
  if(!username || !content?.trim()) return res.status(400).json({ error: 'Faltan datos' });
  if(content.length > 280) return res.status(400).json({ error: 'Máximo 280 caracteres' });
  try {
    // Check if muted
    const { rows } = await pool.query('SELECT muted FROM wall_strikes WHERE username=$1', [username]);
    if(rows[0]?.muted) return res.status(403).json({ error: 'Tu acceso al muro está desactivado' });
    const { rows: post } = await pool.query(
      'INSERT INTO wall_posts (username, content) VALUES ($1, $2) RETURNING *',
      [username, content.trim()]
    );
    res.json(post[0]);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete post (own or admin)
app.delete('/api/wall/:id', async (req, res) => {
  const { username, is_admin } = req.body;
  try {
    const { rows } = await pool.query('SELECT username FROM wall_posts WHERE id=$1', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Post no encontrado' });
    if(!is_admin && rows[0].username !== username) return res.status(403).json({ error: 'Sin permiso' });

    await pool.query('DELETE FROM wall_posts WHERE id=$1', [req.params.id]);

    // If admin deleted, add strike to post owner
    if(is_admin && rows[0].username !== username){
      await pool.query(`
        INSERT INTO wall_strikes (username, strikes) VALUES ($1, 1)
        ON CONFLICT (username) DO UPDATE SET
          strikes = wall_strikes.strikes + 1,
          muted = CASE WHEN wall_strikes.strikes + 1 >= 2 THEN TRUE ELSE FALSE END
      `, [rows[0].username]);
    }

    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Toggle reaction
app.post('/api/wall/:id/react', async (req, res) => {
  const { username, emoji } = req.body;
  if(!username || !emoji) return res.status(400).json({ error: 'Faltan datos' });
  try {
    // Check if already reacted with same emoji
    const { rows } = await pool.query(
      'SELECT id FROM wall_reactions WHERE post_id=$1 AND username=$2 AND emoji=$3',
      [req.params.id, username, emoji]
    );
    if(rows.length){
      await pool.query('DELETE FROM wall_reactions WHERE id=$1', [rows[0].id]);
      res.json({ action: 'removed' });
    } else {
      await pool.query(
        'INSERT INTO wall_reactions (post_id, username, emoji) VALUES ($1, $2, $3)',
        [req.params.id, username, emoji]
      );
      res.json({ action: 'added' });
    }
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Add comment
app.post('/api/wall/:id/comment', async (req, res) => {
  const { username, content, parent_id } = req.body;
  if(!username || !content?.trim()) return res.status(400).json({ error: 'Faltan datos' });
  try {
    const { rows } = await pool.query('SELECT muted FROM wall_strikes WHERE username=$1', [username]);
    if(rows[0]?.muted) return res.status(403).json({ error: 'Tu acceso al muro está desactivado' });
    const { rows: comment } = await pool.query(
      'INSERT INTO wall_comments (post_id, parent_id, username, content) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.params.id, parent_id || null, username, content.trim()]
    );
    res.json(comment[0]);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete comment (own or admin)
app.delete('/api/wall/comment/:id', async (req, res) => {
  const { username, is_admin } = req.body;
  try {
    const { rows } = await pool.query('SELECT username, post_id FROM wall_comments WHERE id=$1', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Comentario no encontrado' });
    if(!is_admin && rows[0].username !== username) return res.status(403).json({ error: 'Sin permiso' });

    await pool.query('DELETE FROM wall_comments WHERE id=$1', [req.params.id]);

    // Strike if admin deleted someone else's comment
    if(is_admin && rows[0].username !== username){
      await pool.query(`
        INSERT INTO wall_strikes (username, strikes) VALUES ($1, 1)
        ON CONFLICT (username) DO UPDATE SET
          strikes = wall_strikes.strikes + 1,
          muted = CASE WHEN wall_strikes.strikes + 1 >= 2 THEN TRUE ELSE FALSE END
      `, [rows[0].username]);
    }

    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

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
    const [picksRows, resultsRow, usersRow] = await Promise.all([
      pool.query('SELECT username, data FROM picks'),
      pool.query('SELECT data FROM results WHERE id = 1'),
      pool.query('SELECT username, is_admin FROM users')
    ]);

    const results = resultsRow.rows[0]?.data || {};
    const admins = new Set(usersRow.rows.filter(u => u.is_admin).map(u => u.username));
    const allPicks = picksRows.rows.filter(r => !admins.has(r.username));
    const total = allPicks.length;
    if(!total) return res.json({ empty: true });

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

    // 3. Equipo más votado como campeón (último partido del bracket)
    const champVotes = {};
    allPicks.forEach(p => {
      const br = p.data?.br || {};
      const keys = Object.keys(br);
      // Find the pick with highest match number (the final)
      const finalKey = keys.sort().reverse()[0];
      if(finalKey && br[finalKey]){
        const team = br[finalKey];
        champVotes[team] = (champVotes[team]||0) + 1;
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

    // 7. La Tumba — bracket completo, menos puntos
    const BRACKET_MATCH_IDS = ['r32','r16','qf','sf','f'];
    function hasBracketComplete(picksData){
      const br = picksData?.br || {};
      return Object.keys(br).length >= 31; // 32 partidos eliminatorios
    }
    const withBracket = allPicks.filter(p => hasBracketComplete(p.data));
    let tumba = null;
    if(withBracket.length){
      const ranked = withBracket.map(p=>({name:p.username,...calcScoreServer(p.data,results)}))
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
//  MURO
// ══════════════════════════════════════════════════════
const WALL_EMOJIS = ['⚽','🔥','😂','😬','👏','💀','🐐','😤'];

// Get all posts with reactions and comment count
app.get('/api/wall', async (req, res) => {
  try {
    const { rows: posts } = await pool.query(`
      SELECT p.id, p.username, p.content, p.created_at,
        COUNT(DISTINCT c.id) as comment_count
      FROM wall_posts p
      LEFT JOIN wall_comments c ON c.post_id = p.id
      GROUP BY p.id
      ORDER BY p.created_at DESC
      LIMIT 100
    `);

    const { rows: reactions } = await pool.query(`
      SELECT post_id, emoji, COUNT(*) as count, 
        array_agg(username) as users
      FROM wall_reactions
      GROUP BY post_id, emoji
    `);

    // Group reactions by post
    const reactionMap = {};
    reactions.forEach(r => {
      if(!reactionMap[r.post_id]) reactionMap[r.post_id] = {};
      reactionMap[r.post_id][r.emoji] = { count: parseInt(r.count), users: r.users };
    });

    const result = posts.map(p => ({
      ...p,
      comment_count: parseInt(p.comment_count),
      reactions: reactionMap[p.id] || {}
    }));

    res.json(result);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Create post
app.post('/api/wall', async (req, res) => {
  const { username, content } = req.body;
  if(!username || !content?.trim()) return res.status(400).json({ error: 'Faltan datos' });
  if(content.length > 500) return res.status(400).json({ error: 'Máximo 500 caracteres' });
  try {
    // Check if user is muted
    const { rows: muteCheck } = await pool.query(
      'SELECT muted FROM wall_strikes WHERE username=$1 AND muted=TRUE', [username]
    );
    if(muteCheck.length) return res.status(403).json({ error: 'Tu acceso al muro está desactivado' });

    const { rows } = await pool.query(
      'INSERT INTO wall_posts (username, content) VALUES ($1, $2) RETURNING *',
      [username, content.trim()]
    );
    res.json({ ...rows[0], reactions: {}, comment_count: 0 });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete post (own or admin)
app.delete('/api/wall/:id', async (req, res) => {
  const { username, is_admin } = req.body;
  try {
    const { rows } = await pool.query('SELECT username FROM wall_posts WHERE id=$1', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Post no encontrado' });
    if(rows[0].username !== username && !is_admin) return res.status(403).json({ error: 'Sin permiso' });

    // If admin deleting someone else's post, add a strike
    if(is_admin && rows[0].username !== username) {
      await pool.query(`
        INSERT INTO wall_strikes (username, strikes) VALUES ($1, 1)
        ON CONFLICT (username) DO UPDATE 
        SET strikes = wall_strikes.strikes + 1,
            muted = CASE WHEN wall_strikes.strikes + 1 >= 2 THEN TRUE ELSE wall_strikes.muted END
      `, [rows[0].username]);
    }

    await pool.query('DELETE FROM wall_posts WHERE id=$1', [req.params.id]);
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Toggle reaction
app.post('/api/wall/:id/react', async (req, res) => {
  const { username, emoji } = req.body;
  if(!WALL_EMOJIS.includes(emoji)) return res.status(400).json({ error: 'Emoji inválido' });
  try {
    // Check if already reacted with this emoji
    const { rows } = await pool.query(
      'SELECT 1 FROM wall_reactions WHERE post_id=$1 AND username=$2',
      [req.params.id, username]
    );
    if(rows.length) {
      // Toggle — remove existing reaction
      await pool.query('DELETE FROM wall_reactions WHERE post_id=$1 AND username=$2', [req.params.id, username]);
      // Add new one if different emoji
      const { rows: existing } = await pool.query(
        'SELECT emoji FROM wall_reactions WHERE post_id=$1 AND username=$2', [req.params.id, username]
      );
      if(!existing.length) {
        // Was same emoji — just removed
      }
    }
    // Insert new reaction
    await pool.query(
      'INSERT INTO wall_reactions (post_id, username, emoji) VALUES ($1,$2,$3) ON CONFLICT (post_id,username) DO UPDATE SET emoji=$3',
      [req.params.id, username, emoji]
    );
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Remove reaction
app.delete('/api/wall/:id/react', async (req, res) => {
  const { username } = req.body;
  try {
    await pool.query('DELETE FROM wall_reactions WHERE post_id=$1 AND username=$2', [req.params.id, username]);
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get comments for a post
app.get('/api/wall/:id/comments', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT id, post_id, parent_id, username, content, created_at
      FROM wall_comments
      WHERE post_id=$1
      ORDER BY created_at ASC
    `, [req.params.id]);
    res.json(rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Add comment
app.post('/api/wall/:id/comments', async (req, res) => {
  const { username, content, parent_id } = req.body;
  if(!username || !content?.trim()) return res.status(400).json({ error: 'Faltan datos' });
  if(content.length > 300) return res.status(400).json({ error: 'Máximo 300 caracteres' });
  try {
    // Check if user is muted
    const { rows: muteCheck } = await pool.query(
      'SELECT muted FROM wall_strikes WHERE username=$1 AND muted=TRUE', [username]
    );
    if(muteCheck.length) return res.status(403).json({ error: 'Tu acceso al muro está desactivado' });

    const { rows } = await pool.query(
      'INSERT INTO wall_comments (post_id, parent_id, username, content) VALUES ($1,$2,$3,$4) RETURNING *',
      [req.params.id, parent_id || null, username, content.trim()]
    );
    res.json(rows[0]);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete comment (own or admin)
app.delete('/api/wall/comments/:id', async (req, res) => {
  const { username, is_admin } = req.body;
  try {
    const { rows } = await pool.query('SELECT username, post_id FROM wall_comments WHERE id=$1', [req.params.id]);
    if(!rows.length) return res.status(404).json({ error: 'Comentario no encontrado' });
    if(rows[0].username !== username && !is_admin) return res.status(403).json({ error: 'Sin permiso' });

    // Strike if admin deleting someone else's comment
    if(is_admin && rows[0].username !== username) {
      await pool.query(`
        INSERT INTO wall_strikes (username, strikes) VALUES ($1, 1)
        ON CONFLICT (username) DO UPDATE
        SET strikes = wall_strikes.strikes + 1,
            muted = CASE WHEN wall_strikes.strikes + 1 >= 2 THEN TRUE ELSE wall_strikes.muted END
      `, [rows[0].username]);
    }

    await pool.query('DELETE FROM wall_comments WHERE id=$1', [req.params.id]);
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get strike status for a user
app.get('/api/wall/strikes/:username', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT strikes, muted FROM wall_strikes WHERE username=$1', [req.params.username]);
    res.json(rows[0] || { strikes: 0, muted: false });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Unmute a user (admin only)
app.post('/api/wall/unmute/:username', async (req, res) => {
  try {
    await pool.query(`
      INSERT INTO wall_strikes (username, strikes, muted) VALUES ($1, 0, FALSE)
      ON CONFLICT (username) DO UPDATE SET muted=FALSE, strikes=0
    `, [req.params.username]);
    res.json({ ok: true });
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
