const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require('../config/database.js')[env]

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const UserModel = require('./User')
const PaymentLinksModel = require('./PaymentLinks')

const models = {
  User: UserModel.init(sequelize, Sequelize),
  PaymentLinks: PaymentLinksModel.init(sequelize, Sequelize),
}

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models))

const db = {
  ...models,
  sequelize,
}

module.exports = db

// const fs = require('fs')
// const path = require('path')
// const Sequelize = require('sequelize')

// const basename = path.basename(__filename)
// const env = process.env.NODE_ENV || 'development'
// const config = require('../config/database.json')[env]

// const db = {}

// let sequelize
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config)
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config)
// }

// fs.readdirSync(__dirname)
//   .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file))
//     db[model.name] = model
//   })

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db
