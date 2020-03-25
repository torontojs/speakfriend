const express = require('express');
const inviteRouter = express.Router();
const isUser = require('../helpers/isUser')
const generateJWT = require("../helpers/generateJWT")
const { check } = require('express-validator');





inviteRouter.post("/", [
  check('email').isEmail().normalizeEmail(),
], async (req, res) => {
  let email = req.body.email
  let userExists = await isUser(email)
  if (userExists === true) {
    res.status(404).end()
  }
  // (1) add the user to the 'users' table on Airtable
  // (2) generate a jwt
  // (3) send the jwt in a magic link to user 
  else {
    let authToken = await generateJWT(email)
    res.status(200).send(email)
  }
})

module.exports = inviteRouter
