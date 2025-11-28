const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/germ-plasma', (req, res) => {
  res.render('germ-plasma', { title: 'Germ Plasma' });
});

router.get('/cotton', (req, res) => {
  res.render('cotton', { title: 'Cotton' });
});

router.get('/wheat', (req, res) => {
  res.render('wheat', { title: 'Wheat' });
});

router.get('/traits/:name', (req, res) => {
  res.render('traits', { title: req.params.name, name: req.params.name });
});

module.exports = router;
