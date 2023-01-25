'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        city_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Surat International Airport",
        city_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Navi Mumbai International Airport",
        city_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chhatrapati Rajaram Maharaj Airport",
        city_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);








  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
