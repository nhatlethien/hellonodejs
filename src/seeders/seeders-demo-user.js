'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { //chạy bình thường
    return queryInterface.bulkInsert('Users',[{
      email: 'teobony@gmail.com',
      password: '123456',
      firstName:'Nhat',
      lastName: 'bony',
      address: 'VietNamese',
      gender: '1',
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => { //chạy rollback
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
