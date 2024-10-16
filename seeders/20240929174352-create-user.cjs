'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('User', [{
    userName: 'Manu',
    passWord: 'Manu5*',
    email: 'manu@nba.com',
    role: 'admin'
  }, {
    userName: 'Chapu',
    passWord: 'Chapu5*',
    email: 'chapu@nba.com',
    role: 'gamer'
  },
  ], {});

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('User', null, {});
}