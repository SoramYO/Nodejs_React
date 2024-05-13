'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('allcode', {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true
            },
            key: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            type: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            valueEn: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            valueVi: {
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
        await queryInterface.dropTable('allcode');
    }
};
