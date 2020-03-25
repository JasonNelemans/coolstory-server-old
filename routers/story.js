const { Router } = require('express');
const Story = require('../models').story
const router = new Router();

router.get('/:id', async (req, res) => {
  const allStories = await Story.findAll({where: { homepageId: req.params.id } });
  res.status(200).json(allStories);
})

router.post('/', async (req, res) => {
  console.log('req.body inside post: ', req.body)
  res.status(200).json('Thanks!')
})

module.exports = router;
