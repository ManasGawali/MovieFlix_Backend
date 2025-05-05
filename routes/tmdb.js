// routes/tmdb.js
const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const API_KEY = process.env.TMDB_API_KEY;

router.get('/popular', async (req, res) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from TMDB' });
  }
});

module.exports = router;
