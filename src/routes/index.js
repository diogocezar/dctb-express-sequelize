const express = require('express')

const routes = express.Router()

const UserController = require('../controllers/UserController')
const PaymentLinksController = require('../controllers/PaymentLinksController')

class Routes {
  constructor() {
    this.router = routes
    this.setRoutes()
  }

  setRoutes() {
    this.router.get('/user/:id', UserController.show)
    this.router.post('/user', UserController.store)
    this.router.get('/paymentLinks', PaymentLinksController.show)
  }

  getRouter() {
    return this.router
  }
}

module.exports = new Routes().getRouter()
