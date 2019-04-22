const { check } = require('express-validator/check')
const ValidationHelper = require('../helpers/ValidationHelper')
const { User } = require('../models')

class UserValidator {
  validateStore() {
    return [check('name', 'User name does not exists').exists()]
  }
}

class UserController {
  async store(req, res) {
    try {
      if ((await ValidationHelper.checkValidation(req, res)) === true) {
        const user = await User.create(req.body)
        return res.json(user)
      }
    } catch (err) {
      return res.json(err)
    }
    return false
  }

  async show(req, res) {
    const user = await User.findAll({ where: { id: req.params.id } })
    if (user.length) return res.json(user)
    return res.json({ message: 'User not found.' })
  }
}

module.exports.UserController = new UserController()
module.exports.UserValidator = new UserValidator()
