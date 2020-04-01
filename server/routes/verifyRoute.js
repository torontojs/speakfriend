const express = require('express');
const verifyRouter = express.Router();
const verifyJWT = require("../helpers/verifyJWT")




verifyRouter.get("/", async (req, res) => {
  let token = req.query.token

  try {
    await verifyJWT(token)
    res.json({ msg: "success"}).status(200).end()
  }
  catch(err){
    res.json({ msg: err.message}).status(400).end()
  }
})



module.exports = verifyRouter
