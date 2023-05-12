const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const QRCode = require('qrcode');
const {
  isValidRequestBody,
  isValid,
  isvalidEmail,
  isValidPassword,
} = require("../utils/utils");


// CREATE ADMIN
const createAdmin = async function (req, res) {
  try {
    let data = req.body;
    if (!isValidRequestBody(data)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in body" });
    }

    let { name, email, password } = data;
    
    if (!isValid(name)) {
      return res
        .status(400)
        .send({ status: false, message: "Provide the proper name " });
    }

    let checkAdmin = await adminModel.findOne({ name: name });

    if (checkAdmin)
      return res
        .status(400)
        .send({ status: false, message: "Admin is already created" });

    if (!isValid(email)) {
      return res
        .status(400)
        .send({ status: false, message: "Email-ID is required" });
    }

    if (!isvalidEmail(email))
      return res.status(400).send({
        status: false,
        message: "Invalid Email id. Ex: example12@gmail.com",
      });
   
    let checkEmail = await adminModel.findOne({ email: email });

    if (checkEmail)
      return res
        .status(400)
        .send({ status: false, message: "This email is already exists" });

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "password is required" });
    }
    
    if (password.length < 8 || password.length > 15)
      res.status(400).send({
        status: false,
        message: "Password must in between 8 to 15 characters",
      });

    if (!isValidPassword(password))
      return res.status(400).send({
        status: false,
        message: `Password ${password}  must include atleast one special character[@$!%?&], one uppercase, one lowercase, one number and should be mimimum 8 to 15 characters long for Example:Password@123`,
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const adminData = {
      name,
      email,
      password
    };

    adminData.role = "ADMIN";

    let createData = await adminModel.create(adminData);

    // businessData.adminId = createData._id;

    // let createBusiness = await businessInfoModel.create(businessData);

    res.status(201).send({
      status: true,
      message: "Admin created successfully",
      data: createData,
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// Login Admin
const loginAdmin = async function (req, res) {
  try {
    let body = req.body;
    const { email, password } = body;

    if (!isValidRequestBody(body))
      return res
        .status(400)
        .send({ status: false, message: "Body Should not be empty" });

    if (!isValid(email))
      return res
        .status(400)
        .send({ status: false, message: "email should not be empty" });

    if (!isvalidEmail(email))
      return res
        .status(400)
        .send({ status: false, message: "Please enter valid email" });

    if (!isValid(password))
      return res
        .status(400)
        .send({ status: false, message: "Password should not be empty" });

    let admin = await adminModel.findOne({ email: email });

    if (!admin)
      return res
        .status(401)
        .send({ status: false, message: "Please use valid credentials" });

    bcrypt.compare(password, admin.password, function (err, result) {
      hasAccess(result);
    });

    function hasAccess(result) {
      if (result) {
        // insert login code here
        //console.log("Access Granted!");
        let token = jwt.sign(
          {
            adminId: admin._id.toString(),
            Assignment: "turtltechbackend",
            Author: "nirajkumar",
          },
          process.env.TOKEN_SECRET_KEY || "TURLTTECH*2023@Developers",
          { expiresIn: "24h" }
        );
        // res.setHeader("x-api-key", token);
        res.setHeader("Authorization", "Bearer", token);

        return res.status(201).send({
          status: true,
          message: "Successfully loggedin",
          adminId: admin._id,
          data: token,
        });
      } else {
        // insert access denied code here
        console.log("Access Denied!");
        return res.status(401).send({
          status: false,
          message: "login denied ",
        });
      }
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createAdmin, loginAdmin };
