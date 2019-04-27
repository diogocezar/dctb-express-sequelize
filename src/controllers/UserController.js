const { check } = require('express-validator/check')
const ValidationHelper = require('../helpers/ValidationHelper')
const ResponseHelper = require('../helpers/ResponseHelper')
const { User } = require('../models')

class UserValidator {
  validateStore() {
    return [check('name', 'User name does not exists').exists()]
  }
}

class UserController {
  async store(req, res, next) {
    try {
      if ((await ValidationHelper.checkValidation(req, res)) === true) {
        const user = await User.create(req.body)
        res.json(ResponseHelper.get(true, 'User stored.', res, user))
      }
    } catch (err) {
      res.json(ResponseHelper.get(true, 'Error User stored.', res, err))
    }
    next()
  }

  async show(req, res, next) {
    const user = await User.findAll({ where: { id: req.params.id } })
    const response = user.length
      ? ResponseHelper.get(true, 'User returned.', res, user)
      : ResponseHelper.get(false, 'User not found.', res, user)
    res.json(response)
    next()
  }
}

module.exports.UserController = new UserController()
module.exports.UserValidator = new UserValidator()
