const express = require('express')

const routes = express.Router()

const { UserController, UserValidator } = require('../controllers/UserController')
const PaymentLinksController = require('../controllers/PaymentLinksController')

class Routes {
  constructor() {
    this.router = routes
    this.setRoutes()
  }

  setRoutes() {
    /**
     * @swagger
     * /user:
     *   post:
     *     tags:
     *       - Users
     *     name: Users
     *     summary: Get Users
     *     consumes:
     *       - application/json
     *     parameters:
     *       - id: body
     *         required:
     *           - id
     *     responses:
     *       200:
     *         description: User found and logged in successfully
     *       401:
     *         description: Bad username, not found in db
     *       403:
     *         description: Username and password don't match
     */
    this.router.get('/user/:id', UserController.show)
    this.router.post('/user', UserValidator.validateStore(), UserController.store)
    this.router.get('/paymentLinks', PaymentLinksController.show)
  }

  getRouter() {
    return this.router
  }
}

module.exports = new Routes().getRouter()
