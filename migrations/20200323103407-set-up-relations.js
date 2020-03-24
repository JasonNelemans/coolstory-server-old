'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("homepages", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false
    });
    await queryInterface.addColumn("stories", "homepageId", {
      type: Sequelize.INTEGER,
      references: {
        model: "homepages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("homepages", "userId");
    await queryInterface.removeColumn("stories", "homepageId");
  }
};
