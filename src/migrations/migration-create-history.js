'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        // Use Sequelize.DataTypes instead of just DataTypes
        await queryInterface.createTable('histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true
            },
            patientId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            doctorId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            file: {
                type: Sequelize.DataTypes.TEXT,
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
        await queryInterface.dropTable('histories');
    }
};
