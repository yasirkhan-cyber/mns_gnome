require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Page and API route setup
app.use('/', require('../routes/pages'));
app.use('/api', require('../routes/api'));

// 404/fallback
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

module.exports = app;

