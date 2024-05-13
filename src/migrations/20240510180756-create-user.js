'use strict';

const { type } = require("os");

module.exports = {
  async up(queryInterface, Sequelize) {
    // Use Sequelize.DataTypes instead of just DataTypes
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      typeRole: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      keyRole: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
