'use strict';

const { time } = require("console");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true
            },
            statusId: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            doctorId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            patientId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            date: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
            },
            timeType: {
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
        await queryInterface.dropTable('bookings');
    }
};
