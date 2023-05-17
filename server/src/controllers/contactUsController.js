const nodemailer = require("nodemailer");
const contactUsModel = require("../models/contactUsModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// Configure Nodemailer with your email provider's SMTP settings
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sandeep.sid.kumar10@gmail.com",
    pass: "gosmciadfnayqjfn",
  },
});

// // ADD CONTACT US INFO
// const addContactUsDetails = async (req, res) => {
//     try {
//       let data = req.body;

//       let { name, email, mobile, subject, message } = data;

//       // setup e-mail data with unicode symbols
//       var mailOptions = {
//         from: data.email, // sender address
//         to: "physics19891@gmail.com", // list of receivers
//         subject: data.subject, // Subject line
//         text: data.text, // plaintext body
//       };

//       // send mail with defined transport object
//       smtpTransport.sendMail(mailOptions, async function (error, response) {
//         if (error) {
//           console.log(error);
//           return res.status(400).send("An error occurred while sending the email.");
//         } else {
//             await contactUsModel.create(data);
//             console.log("Message sent: " + response.response);
//             return res.status(201).send({ status: true, message: 'Email sent successfully! Contact us data added'})
//         }

//         // if you don't want to use this transport object anymore, uncomment following line
//         //smtpTransport.close(); // shut down the connection pool, no more messages
//       });

//     } catch (error) {
//       return res.status(500).send({ status: false, message: error.message });
//     }
//   };

const addContactUsDetails = async (req, res) => {
  try {
    let data = req.body;

    let { name, email, mobile, subject, message } = data;

    // setup e-mail data with unicode symbols
    var mailOptions = {
      from: data.email, // sender address
      to: "eduwiretech@gmail.com", // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plaintext body
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, async function (error, response) {
      if (error) {
        console.log(error);
        return res
          .status(400)
          .send("An error occurred while sending the email.");
      } else {
        await contactUsModel.create(data);
        console.log("Message sent: " + response.response);
        return res
          .status(201)
          .send({
            status: true,
            message: "Email sent successfully! Contact us data saved in database",
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