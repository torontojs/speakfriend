const jwt = require('jsonwebtoken')

const verifyJWT = (token) => {
  const secret = process.env.JWTSECRET

  return new Promise((resolve, reject) => {
    return jwt.verify(token, secret,(err, decoded) => {
      if(err) {
        reject(err)
      }
      if(decoded) {
        resolve(decoded)
      }
    })
  })
}

module.exports = verifyJWT