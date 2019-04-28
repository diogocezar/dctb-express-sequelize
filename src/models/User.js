const Sequelize = require('sequelize')

/**
 * @swagger
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      password:
 *        type: string
 *    required:
 *      - name
 *      - email
 *      - password
 */
class User extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return sequelize.define(
      'user',
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
      },
      {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
      },
    )
  }
}

module.exports = User
