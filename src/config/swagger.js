require('dotenv').config()

const swaggerDefinition = {
  info: {
    title: 'dctb-express-sequelize',
    version: '1.0.0',
    description: 'Endpoints to teste a simple sequelize environment',
  },
  host: `localhost:${process.env.PORT || 3333}`,
  basePath: '/',
}

module.exports = { swaggerDefinition }
