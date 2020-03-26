const express = require('express');
const verifyRouter = express.Router();


verifyRouter.get("/", async (req, res) => {
  let token = req.query
  console.log(token, "this is the token I got from the client")

  // you know have the token, now check to see if it is valid

})



module.exports = verifyRouter
