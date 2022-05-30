'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Addresses',
    [
      {
        street: 'Rua Manoel Pizzolati',
        district: 'Jardim Atlântico',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        street: 'Rua Silvia Maria fabro',
        district: 'Kobrasol',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),
  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Addresses', null, {})
};
