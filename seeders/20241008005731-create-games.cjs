'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Game', [{
    title: 'Manu',
    genre: 'Sports',
    platform: 'XBOX',
    price: 400,
    available: true,

  }, {
    title: 'Chapu',
    genre: 'RPG',
    platform: 'PS4',
    price: 100,
    available: false,
  },
  ], {});

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Game', null, {});
}
