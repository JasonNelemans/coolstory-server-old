const { Router } = require('express');
const Homepage = require('../models').homepage
const Story = require('../models').story
const authMiddleware = require('../auth/middleware');
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

router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const {title, description, color, backgroundColor, id} = req.body

    const updatedHomepage = await Homepage.update({
      title,
      description,
      color, 
      backgroundColor,
    }, 
    {
      where: { id }
    })

    const returnHomepage = await Homepage.findAll({
      where: { id }
    })

    res.json(returnHomepage);
  }
  catch (error) {
    console.log('error: ', error)
  }
})

module.exports = router;