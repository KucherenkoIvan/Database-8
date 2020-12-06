const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const Stocks = sequelize.define('Stocks', {
        ProductID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Qty: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        freezeTableName: true
    });

module.exports = Stocks;
