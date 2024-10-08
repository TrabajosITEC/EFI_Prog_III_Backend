'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_juego: {
      type: Sequelize.INTEGER
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
    },
    puntuacion: {
      type: Sequelize.INTEGER
    },
    comentario: {
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Review');
}