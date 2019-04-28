require('dotenv').config()

module.exports = {
  secret: process.env.JWT_SECRET,
  expiresIn: 60,
}
