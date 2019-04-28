const express = require('express')
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes')

const { logMiddlewareStart, logMiddlewareEnd } = require('./middlewares/LogMiddleware')
const IdHashMiddleware = require('./middlewares/IdHashMiddleware')
const SwaggerHelper = require('./helpers/SwaggerHelper')

class App {
  constructor() {
    this.configure()
    this.start()
  }

  configure() {
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(logMiddlewareStart)
    this.app.use(IdHashMiddleware)
    this.app.use(routes)
    this.app.use(logMiddlewareEnd)
    SwaggerHelper.use(this.app)
  }

  start() {
    this.app.listen(process.env.PORT || 3333)
  }
}

new App()
