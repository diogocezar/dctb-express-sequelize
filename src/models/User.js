const Sequelize = require('sequelize')

/**
 * @swagger
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      password:
 *        type: string
 *    required:
 *      - id
 *      - name
 *      - email
 *      - password
 */
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
