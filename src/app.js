const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')

class App {
  constructor() {
    this.configure()
    this.start()
  }

  configure() {
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use('/public', express.static(path.resolve(__dirname, '..', 'public')))
    this.app.use(routes)
  }

  start() {
    this.app.listen(process.env.PORT || 3333)
  }
}

new App()
