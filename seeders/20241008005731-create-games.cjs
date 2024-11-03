'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Game', [{
    title: 'FIFA 2024',
    genre: 'Sports',
    platform: 'XBOX',
    price: 400,
    available: true,
  }, {
    title: 'God of War',
    genre: 'RPG',
    platform: 'PS4',
    price: 100,
    available: true,
  }, {
    title: 'The Last of Us',
    genre: 'RPG',
    platform: 'PS4',
    price: 100,
    available: true,
  },  {
    title: 'Mario Bros',
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
