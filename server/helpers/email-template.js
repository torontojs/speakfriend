const emailTemplate = (token) => {
  let template = `
  <div style="text-align: center; font-family:Menlo, monospace;"> 
    <h1>speakfriend</h1>
    <h3>You've been invited to join speakfriend, a  tool that connects speakers to event organizers.</h3
    <p>To access Speakfriend, please <a href="http://localhost:3000/verify?token=${token}">click here!</a></p>
    <p>The above link expires in 12 hours from when you received this email, but you can generate another access link by navigating <a href="speak.torontojs.com/login">here.</a>
  </div>
  `
  return template
}

module.exports = emailTemplate