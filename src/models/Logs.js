const Sequelize = require('sequelize')

class Logs extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return sequelize.define('Logs', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    })
  }
}

module.exports = Logs
