'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'homepages', 
        [
          {
            title: 'How I became a programmer',
            description: 'Check out my story from trainee, to junior, to senior to the TECHLEAD!',
            backgroundColor: '#ffffff',
            color: '#000000',
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'All my breakfasts',
            description: 'Look at my breakfast.',
            backgroundColor: '#ffffff',
            color: '#000000',
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], 
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('homepages', null, {});
  }
};
