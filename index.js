require('dotenv').config();
const express = require('express');
const tmdbRoutes = require('./routes/tmdb');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/tmdb', tmdbRoutes);

app.get('/', (req, res) => {
  res.send('TMDB Proxy Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
