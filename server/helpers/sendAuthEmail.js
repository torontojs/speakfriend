const nodemailer = require("nodemailer");
const emailTemplate = require("./email-template")
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
  let emailContent = emailTemplate(token, email)
  var message = {
    from: "@gmail.com",
    subject: "Your access link to Speakfriend",
    to: email,
    html: emailContent
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