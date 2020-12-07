const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

    const CourierInfo = sequelize.define('CourierInfo', {
        BirthDate: {
            type: DataTypes.DATE,
            allowNull: false
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
