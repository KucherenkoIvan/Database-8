const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('User', {
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accessLevel: {
      type: DataTypes.ENUM,
      values: [
            'read-only', // read data from all tables exc. User
            'read-write', // read & write data to all tables ex. User
            'user-control', // read-write + access to table User
            'absolute' // user-control + access to row sql tools
        ],
      allowNull: false
  }
}, {
    freezeTableName: true
});

module.exports = User;
