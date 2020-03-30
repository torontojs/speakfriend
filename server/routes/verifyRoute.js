const express = require('express');
const verifyRouter = express.Router();
const verifyJWT = require("../helpers/verifyJWT")




verifyRouter.get("/", async (req, res) => {
  let token = req.query.token

  let verified = await verifyJWT(token)
  console.log(verified.name)

  // if(verified.name === "TokenExpiredError") {
  //   res.json({msg: "token expired"}).status(400).end()
  // }
    

})



module.exports = verifyRouter
