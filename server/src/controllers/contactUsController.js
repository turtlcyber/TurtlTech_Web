const nodemailer = require("nodemailer");

// CONTACT US
// Configure Nodemailer with your email provider's SMTP settings
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "turtltechweb@gmail.com",
    pass: "smtyjocjoesvochr",
  },
});

const addContactUsDetails = async (req, res) => {
  try {
    let data = req.body;

    let { name, email, to, subject, text } = data;

    // setup e-mail data with unicode symbols
    let msg =
      "<h2 style='padding:0px; margin:0px'>Name: <strong style='color:blue;'>" +
      name +
      "</strong></h2> <p style='padding:0px; margin:0px; margin-top:10px;'>Email: " +
      email +
      "</p>  <p style='border:1px solid #d4fff8; max-width:800px; padding:10px'>" +
      text +
      " </p>";
    var mailOptions = {
      from: `TurtlTech.com <${data.email}>`, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      // text: msg, // plaintext body
      html: msg,
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        return res
          .status(400)
          .send({
            status: false,
            message: "An error occurred while sending the email.",
          });
      } else {
        return res.status(201).send({
          status: true,
          message: "Email sent successfully!",
        });
      }

      // if you don't want to use this transport object anymore, uncomment following line
      //smtpTransport.close(); // shut down the connection pool, no more messages
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addContactUsDetails };
