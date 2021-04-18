'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    //  * await queryInterface.bulkInsert('People', [{
    //  *   name: 'John Doe',
    //  *   isBetaMember: false
    //  * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
       email: 'code@state.com',
       password:'1234',
       username:"kimKoding",
       mobile:"010-1234-0000",
       createdAt:new Date(),
       updatedAt:new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
