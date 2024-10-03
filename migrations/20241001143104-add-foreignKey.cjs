'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Recipes', 'RegisterId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'Register', 
      key: 'id'
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('Recipes', 'RegisterId');
}