const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const OrderDetails = sequelize.define('OrderDetails', {
        OrderID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        LineItem: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ProductID: {
            type: DataTypes.INTEGER
        },
        Qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TotalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

module.exports = OrderDetails;
