const { validationResult } = require('express-validator/check')

class ValidationHelper {
  async checkValidation(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return true
  }
}

module.exports = new ValidationHelper()
