const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const Product = sequelize.define('Product', {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    });

module.exports = Product;
