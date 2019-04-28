require('dotenv').config()

const jwtConfigs = {
  secret: process.env.JWT_SECRET,
  expiresIn: 60,
}

module.exports = { jwtConfigs }
