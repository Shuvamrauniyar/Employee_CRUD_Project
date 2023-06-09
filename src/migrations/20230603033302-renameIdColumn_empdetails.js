'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
       await queryInterface.changeColumn('EmpDetails','contact',{
        type: Sequelize.BIGINT
       });
       await queryInterface.changeColumn('ContactDetails','phone',{
        type: Sequelize.BIGINT
       });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.renameColumn('EmpDetails','emp_id','id');
  }
};
