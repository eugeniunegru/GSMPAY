'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.sequelize.transaction(t => {
     return Promise.all([
       queryInterface.addColumn('basket_devices', 'deviceId', {
         type: Sequelize.DataTypes.INTEGER,
         references: { model: 'devices', key: 'id' }
       // queryInterface.addColumn('device_infos', 'description', {
       //   type: Sequelize.DataTypes.STRING
       }, { transaction: t })
     ]);
   });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('basket_devices', 'deviceId', { transaction: t }),
      ]);
    });
  }
};
