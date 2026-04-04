const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();
 
const app = express();
app.use(cors());
app.use(express.json());
 
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
 
    CREATE TABLE IF NOT EXISTS chat (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
 
    CREATE TABLE IF NOT EXISTS refs (
      referrer_code CHAR(3) NOT NULL,
      referred_username TEXT NOT NULL,
      PRIMARY KEY (referrer_code, referred_username)
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
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
 
// ══════════════════════════════════════════════════════
//  CHAT
// ══════════════════════════════════════════════════════
 
app.get('/api/chat', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, username, message, created_at FROM chat ORDER BY created_at ASC LIMIT 200'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
 
app.post('/api/chat', async (req, res) => {
  const { username, message } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO chat (username, message) VALUES ($1, $2) RETURNING *',
      [username, message]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
 
app.delete('/api/chat/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM chat WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
 
// ══════════════════════════════════════════════════════
//  REFERIDOS
// ══════════════════════════════════════════════════════
 
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
//  START
// ══════════════════════════════════════════════════════
const PORT = process.env.PORT || 3000;
initDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Al Ángulo backend corriendo en puerto ${PORT}`));
}).catch(e => {
  console.error('Error iniciando DB:', e);
  process.exit(1);
});