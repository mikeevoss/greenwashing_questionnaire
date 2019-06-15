const Mailgun = require("mailgun-js");
const API_KEY = "key-98e2993189a4bb0d063da68526103fed";
const DOMAIN = "mg.headless.agency";
const mailgun = new Mailgun({
  apiKey: API_KEY,
  domain: DOMAIN
});

const sendMail = ({ email }) => {
  const data = {
    from: "Excited User <me@mg.headless.agency>",
    to: email,
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!"
  };
  console.log(data);

  mailgun.messages().send(data, (error, body) => {
    console.log(error, body);
  });
};

module.exports = sendMail;
