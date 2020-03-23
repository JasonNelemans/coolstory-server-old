const { Router } = require('express');
const Homepage = require('../models').homepage
const router = new Router();

router.get('/', async (req, res) => {
  const allHomepages = await Homepage.findAll();
  res.status(200).json(allHomepages);
})

module.exports = router;