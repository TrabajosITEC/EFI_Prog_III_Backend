'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Register', [{
    userName: 'Manu',
    passWord: 'Manu5*',
    email: 'manu@nba.com'
  },{
    userName: 'Chapu',
    passWord: 'Chapu5*',
    email: 'chapu@nba.com'
  },
], {});
  
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Register', null, {});
}
