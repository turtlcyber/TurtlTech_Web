var nodemailer = require("nodemailer");
const { isValidRequestBody, isValid } = require("../utils/utils");
const blogModel = require("../models/blogModel");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "sandeep.sid.kumar10@gmail.com",
        pass: "gosmciadfnayqjfn"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "sandeep.sid.kumar10@gmail.com", // sender address
    to: "physics19891@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.response);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    smtpTransport.close(); // shut down the connection pool, no more messages
});



/*

If you have enabled 2-factor authentication on your Google account you can't use your regular password to access Gmail programmatically. You need to generate an app-specific password and use that in place of your actual password.

Steps:

Log in to your Google account Go to My Account > Sign-in & Security > App Passwords (Sign in again to confirm it's you) Scroll down to Select App (in the Password & sign-in method box) and choose Other (custom name) Give this app password a name, e.g. "nodemailer" Choose Generate Copy the long generated password and paste it into your Node.js script instead of your actual Gmail password.

*/



const sendMail = async (req, res) => {
    try {

        let blogId = req.params.blogId;
        let data = req.body;

        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: 'Please enter data in body'})
        }

        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "sandeep.sid.kumar10@gmail.com",
                pass: "gosmciadfnayqjfn"
            }
        });

        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            } else {
                console.log("Message sent: " + response.response);
            }
        
            // if you don't want to use this transport object anymore, uncomment following line
            smtpTransport.close(); // shut down the connection pool, no more messages
        });        

        let { service, auth, user, password } = data;

        if (!isValid(service)) {
            return res.status(400).send({ status: false, message: 'Service provider name is required'})
        }

        let blog = await blogModel.findOne({ blogId: blogId });

        // console.log(blog.sections.length);
        // console.log(blog.tags)
        // console.log(blog.blogUID)

        let updateBlog = await blogModel.findOneAndUpdate(
            {
                blogId: blogId,
                isPublished: true,
                isDeleted: false
            },

            {
                

            },

            { new: true }
        
        )

        if (!isValid(auth)) {
            return res.status(400).send({ status: false, message: 'User authentication is required'})
        };

        if (auth) {
            if (!isValid(user)) {
                return res.status(400).send({status: false, message: 'User email address is required'})
            };

            if (!isValid(pass)) {
                return res.status(400).send({ status: false, message: "User's email's password is required"})
            }
        }


    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


// Timestamp
var timestamp = Math.floor(Date.now());
// 24 hour old timestampt
var dayAgo = timestamp - 86400000;

console.log(dayAgo);