'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('stories', 
        [
          {
            name: 'Recently passed my first assessment.',
            content: 'Almost three weeks ago we passed our first assessment as trainees. That was another step.',
            imageUrl: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg',
            homepageId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Second assessment week.',
            content: 'This is our second assessment and we are all working hard. Wish us luck.',
            imageUrl: 'https://careertraining.ed2go.com/common/images/1/16766/java-programming.jpg',
            homepageId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Today was...',
            content: 'Tortilla, eggs and fishsticks.',
            imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/17/57/7d/17/2-egg-breakfast.jpg',
            homepageId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Yesterday was...',
            content: 'Same thing.',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/08/high-protein-breakfast-recipe-collectio-main-image.jpg',
            homepageId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], 
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('stories', null, {});
  }
};
