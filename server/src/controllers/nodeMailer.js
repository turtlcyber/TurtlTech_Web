var nodemailer = require("nodemailer");

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
    text: "This mail is send", // plaintext body
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


