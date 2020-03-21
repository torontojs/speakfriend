const jwt = require('jsonwebtoken')
const config = require('../config/jwtConfig.js')

const generateJWT = (email) => {
  const secret = process.env.JWTSECRET

  return new Promise((resolve, reject) => {
    return jwt.sign(
      { user: email },
      secret,
      config,
      (err, token) => {
        if (err) {
          reject(err)
        } else {
          resolve(token)
        }
      },
    )
  })
}

module.exports = generateJWT