const nodemailer = require("nodemailer");

let options = {
  // find out what the host for torontojs is
  host: 'smtp.gmail.com',
  // have auth stored as .env variable? 
  auth: {
    user: "@gmail.com",
    pass: "s"
  }
}
let defaults = {
  // from: "speak@torontojs.com",
  from: "2@gmail.com",
  subject: "Your link to Speakfriend"
}

const transporter = nodemailer.createTransport(options, [defaults])

const sendAuthEmail = async (email, token) => {
  let sent = false
  // transporter.verify(function(error, success) {
  //   if (error) {
  //     console.log(error);
  //     sent = false
  //   } else if (success) {
  //     console.log("Server is ready to take our messages");
  //     sent = true
  //   }
  // });
  var message = {
    // from: "speak@torontojs.com",
    from: "@gmail.com",
    to: email,
    subject: "Your link to Speakfriend",
    html: `<h1>You have been invited to Speakfriend</h1> <a href= ${token}>Click here!</a>`
  };
  await transporter.sendMail(message, (err, info) => {
    if(err) {
      console.log(err)
    }
    else if (info) {
      console.log(info)
      sent = true;
    }
  })
  return sent
  
}

module.exports = sendAuthEmail