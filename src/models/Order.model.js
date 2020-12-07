const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const Order = sequelize.define('Order', {
        CustomerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CourierID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        OrderDate: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        }
    }, {
        freezeTableName: true
    });

module.exports = Order;
