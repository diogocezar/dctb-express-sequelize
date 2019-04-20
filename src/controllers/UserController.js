class UserController {
  async store(req, res) {
    return res.json({ success: true })
  }

  async show(req, res) {
    return res.json({ success: true })
  }
}

module.exports = new UserController()
