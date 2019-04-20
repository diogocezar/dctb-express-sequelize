const Sequelize = require('sequelize')

class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    })
  }
}

module.exports = User
