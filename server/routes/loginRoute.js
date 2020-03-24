const express = require('express');
const loginRouter = express.Router();
const isUser = require('../helpers/isUser')
const generateJWT = require("../helpers/generateJWT")
const sendAuthEmail = require("../helpers/sendAuthEmail")
const { check } = require('express-validator');

loginRouter.post("/", [
  check('email').isEmail().normalizeEmail(),
], async (req, res) => {
  let email = req.body.email     
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
