const jwt = require('jsonwebtoken')
const jwtConfigs = require('../config/jwt')

class JwtMiddleware {
  sign(payload) {
    return jwt.sign(payload, jwtConfigs.secret, {
      expiresIn: jwtConfigs.expiresIn,
    })
  }

  verify(req, res, next) {
    return (req, res, next) => {
      const token = req.body.token || req.query.token || req.headers['x-access-token']
      if (token) {
        jwt.verify(token, jwtConfigs.secret, (err, decoded) => {
          if (err) return res.json({ success: false, message: 'Failed to authenticate token.' })
          req.decoded = decoded
          next()
        })
      } else {
        res.status(403).send({ sucess: false, message: 'No token provided.' })
      }
    }
  }
}

const jwtMiddleware = new JwtMiddleware()
const sign = jwtMiddleware.sign()
const verify = jwtMiddleware.verify()

module.exports = { sign, verify }
