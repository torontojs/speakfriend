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
  // if the user has already been invited
  // (1) generate a jwt
  // (2) send the jwt in a magic link to user 
  else {
    let authToken = await generateJWT(email)

    let magicLink = await sendAuthEmail(email, authToken)

    if (magicLink) {
      res.json({msg: "success"}).status(200).end()
    }
    else if (!magicLink) {
      res.json({msg: "fail"}).status(400).end()
    }

    // take the authToken and send it via an emailer in the form of a magic link
    // send a 200 response once the email is sent succesfully
  }
})

module.exports = loginRouter
