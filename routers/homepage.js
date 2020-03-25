const { Router } = require('express');
const Homepage = require('../models').homepage
const Story = require('../models').story
const router = new Router();

router.get('/', async (req, res) => {
  const allHomepages = await Homepage.findAll();
  res.status(200).json(allHomepages);
})

router.get('/:id', async (req, res) => {
  const homepage = await Homepage.findAll({
    where: { id: req.params.id },
    include: [Story],
    order: [[Story, "createdAt", "DESC"]] 
  });
  res.status(200).json(homepage);
})

module.exports = router;