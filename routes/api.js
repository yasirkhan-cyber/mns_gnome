const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/cotton - all cotton data
router.get('/cotton', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM ncvt_tbl');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cotton data' });
  }
});

// GET /api/traits/:name - all traits for a cotton name
router.get('/traits/:name', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM ncvt_trait WHERE name = ?', [req.params.name]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trait data' });
  }
});

module.exports = router;
