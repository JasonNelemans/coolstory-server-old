'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    await queryInterface.addColumn("homepages", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("homepages", "userId");
  }
};
