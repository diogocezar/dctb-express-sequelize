const express = require('express')

const routes = express.Router()

const UserController = require('../controllers/UserController')

class Routes {
  constructor() {
    this.router = routes
    this.setRoutes()
  }

  setRoutes() {
    this.router.get('/user', UserController.show)
    this.router.post('/user', UserController.store)
  }

  getRouter() {
    return this.router
  }
}

module.exports = new Routes().getRouter()
