'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Review', [{
    game_id: 1,
    user_id: 1,
    rating: 5,
    comment: "burritoOrtega"
  }, {
    game_id: 1,
    user_id: 2,
    rating: 4,
    comment: null
  },
  ], {});

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Review', null, {});
}

