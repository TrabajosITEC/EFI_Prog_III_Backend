'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Purchase', [{
    user_id: 1,
    date: new Date(2024, 10, 7),
    total: 1200
  }, {
    user_id: 2,
    date: new Date(2024, 10, 5),
    total: 500
  },
  ], {});

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Purchase', null, {});
}

