require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    operatorAlises: false,
    logging: false,
    define: {
      timestamps: true,
      underscord: true,
      underscordAll: true,
    },
  },
}
