const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require('../config/database')[env]

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const UserModel = require('./User')
// const PaymentLinksModel = require('./PaymentLinks')

const models = {
  User: UserModel.init(sequelize, Sequelize),
  // PaymentLinks: PaymentLinksModel.init(sequelize, Sequelize),
}

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models))

const db = {
  ...models,
  sequelize,
}

module.exports = db
