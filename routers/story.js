const { Router } = require('express');
const Story = require('../models').story
const authMiddleware = require('../auth/middleware');
const router = new Router();

router.get('/:id', async (req, res) => {
  const allStories = await Story.findAll({
    where: { homepageId: req.params.id }, 
    order: [ ['createdAt', 'DESC'] ] });
  res.status(200).json(allStories);
})

router.post('/', authMiddleware, async (req, res) => {
  const { name, content, imageUrl, homepageId} = req.body;

  const newStory = await Story.create({
    name,
    content,
    imageUrl,
    homepageId
  })

  res.status(200).json(newStory.dataValues);
})

module.exports = router;
