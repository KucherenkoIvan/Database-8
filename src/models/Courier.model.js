const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const Courier = sequelize.define('Courier', {
        FName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MName: {
            type: DataTypes.STRING,
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        PriorSalary: {
            type: DataTypes.INTEGER,
        }
    }, {
        freezeTableName: true
    });

module.exports = Courier;
