'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        // Use Sequelize.DataTypes instead of just DataTypes
        await queryInterface.createTable('clinics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true
            },
            address: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            image: {
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
        await queryInterface.dropTable('clinics');
    }
};
