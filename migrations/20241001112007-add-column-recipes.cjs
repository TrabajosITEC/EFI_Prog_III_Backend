'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.addColumn(
        'Recipes',
        'Burrito',
        {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
        },
        {transaction: t},
      ),
      queryInterface.addColumn(
        'Recipes',
        'Ortega',
        {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
        },
        {transaction: t},
      ),
    ])
  })
}
export async function down(queryInterface, Sequelize) {
  return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.removeColumn('Recipes', 'Burrito', {transaction: t}),
      queryInterface.removeColumn('Recipes', 'Ortega', {transaction: t}),
    ])
  })
}
