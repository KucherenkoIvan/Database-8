const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(config.get('database-name'), config.get('database-username'), config.get('database-password'), {
    host: config.get('database-host'),
    port: config.get('database-port'),
    dialect: 'mssql'
  })

module.exports = sequelize;