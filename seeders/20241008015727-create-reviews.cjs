'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Review', [{
    game_id: 14,
    user_id: 16,
    rating: 5,
    comment: "burritoOrtega"
  }, {
    game_id: 13,
    user_id: 17,
    rating: 4,
    comment: null
  },
  ], {});

}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Review', null, {});
}

