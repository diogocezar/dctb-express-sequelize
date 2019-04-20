const { User } = require('../models')

class UserController {
  async store(req, res) {
    const user = await User.create(req.body)
    return res.json(user)
  }

  async show(req, res) {
    const user = await User.findAll({ where: { id: req.params.id } })
    if (user.length) return res.json(user)
    return res.json({ message: 'User not found.' })
  }
}

module.exports = new UserController()
