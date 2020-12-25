const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const CourierInfo = sequelize.define('CourierInfo', {
        BirthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        CourierID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

module.exports = CourierInfo;
