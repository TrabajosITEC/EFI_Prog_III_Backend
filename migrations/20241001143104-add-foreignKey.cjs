'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Recipes', 'UserId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'User',
      key: 'id'
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('Recipes', 'UserId');
}