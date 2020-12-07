const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const Customer = sequelize.define('Customer', {
        FName: {
            type: DataTypes.STRING,
        },
        MName: {
            type: DataTypes.STRING,
        },
        LName: {
            type: DataTypes.STRING,
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING,
        },
        DateInSystem: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        }
    }, {
        freezeTableName: true
    });

module.exports = Customer;
