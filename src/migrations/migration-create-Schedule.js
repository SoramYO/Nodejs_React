'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        // Use Sequelize.DataTypes instead of just DataTypes
        await queryInterface.createTable('schedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true
            },
            currentNumber: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            maxNumber: {
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
            doctorId: {
                type: Sequelize.DataTypes.INTEGER,
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
        await queryInterface.dropTable('schedules');
    }
};
