const express = require('express');
const loginRouter = express.Router();

// an unauthenticated user wants to login, they submit an email
  // check if that email is in Airtable

  // if it is send a link to it with a jwt
loginRouter.post("/", (req, res) => {
  console.log(req.body)
  let email = req.body.email
  if (email !== "email@email.com") {
    res.status(404).end()
  }
  else {
    res.status(200).send(email)
  }
})

module.exports = loginRouter
