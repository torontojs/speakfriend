const express = require('express');
const inviteRouter = express.Router();

// an authenticated user wants to invite a new user, they submit an email
  // if that email isn't already in Airtable add it

  // then send it a link with a jwt
inviteRouter.post("/", (req, res) => {
  let email = req.body.email
  console.log(email)
  res.send(email)
})

module.exports = inviteRouter
