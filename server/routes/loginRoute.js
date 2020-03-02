const express = require('express');
const loginRouter = express.Router();
const isUser = require('../helpers/isUser')


loginRouter.post("/", async (req, res) => {
  let email = req.body.email
  // if email is not in Airtable
  let userExists = await isUser(email)
  if (userExists === false) {
    // send back a 404 and error message, user should be notified that they haven't been invited to Speakfriend yet
    res.status(404).end()
  }
  // if the user has already been invited
  // (1) generate a jwt
  // (2) send the jwt in a magic link to user 
  else {
    res.status(200).send(email)
  }
})

module.exports = loginRouter
