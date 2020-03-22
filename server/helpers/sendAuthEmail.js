const nodemailer = require("nodemailer");

let options = {
  // find out what the host for torontojs is
  host: 'smtp.gmail.com',
  // have auth stored as .env variable? 
  auth: {
    user: "@gmail.com",
    pass: ""
  }
}


const transporter = nodemailer.createTransport(options)

const sendAuthEmail = async (email, token, res) => {
  var message = {
    from: "@gmail.com",
    subject: "Your link to Speakfriend",
    to: email,
    html: `<h1>You have been invited to Speakfriend</h1> <a href=${token}>Click here!</a>`
  };
  return await transporter.sendMail(message, (err, info) => {
    if(err) {
      console.log(err)
      res.json({msg: "fail"}).status(400).end()
    }
    else if (info) {
      console.log(info)
      res.json({msg: "success"}).status(200).end()
    }
  })
}

module.exports = sendAuthEmail