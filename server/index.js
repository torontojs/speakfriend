const express = require('express');
const serverless = require("serverless-http");
require('dotenv').config()

const loginRouter = require('./routes/loginRoute')
const inviteRouter = require('./routes/inviteRoute')
const verifyRouter = require('./routes/verifyRoute')


const app = express();

app.use(express.json());


app.use("/.netlify/functions/index/login", loginRouter);
app.use("/.netlify/functions/index/invite", inviteRouter);
app.use("/.netlify/functions/index/verify", verifyRouter);




module.exports = app;
module.exports.handler = serverless(app);
