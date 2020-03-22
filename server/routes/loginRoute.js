const express = require('express');
const loginRouter = express.Router();
const isUser = require('../helpers/isUser')
const generateJWT = require("../helpers/generateJWT")
const sendAuthEmail = require("../helpers/sendAuthEmail")


loginRouter.post("/", async (req, res) => {
  let email = req.body.email
    // TO DO ---- Sanitize email input here
  let userExists = await isUser(email)
  if (userExists === false) {
    res.status(404).end()
  }
  else {
    let authToken = await generateJWT(email)

    await sendAuthEmail(email, authToken, res)

  }
})

module.exports = loginRouter
