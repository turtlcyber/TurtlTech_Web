const visitorModel = require("../models/visitorModel");
const bcrypt = require("bcrypt");
const passport = require("passport");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");
const { imageMV } = require("../middlewares/ImageUpload");

// ADD VISITORS
const addBlogVisitors = async (req, res) => {
  try {
    let data = req.body;
    let file = req.files;

    let { name, email, password, sub, picture } = data;

    if (!isValid(name)) {
      return res.status.send({
        status: false,
        message: "Visitor name is required",
      });
    }

    if (!isValid(email)) {
      return res.status.send({
        status: false,
        message: "Visitor email is required",
      });
    }

    if (!isvalidEmail(email)) {
      return res.status.send({
        status: false,
        message: "Invalid email, please enter a valid email",
      });
    }

    let checkEmail = await visitorModel.findOne({ email: email });

    if (checkEmail) {
      return res.status.send({
        status: false,
        message: "Duplicate email, please enter a unique email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    let visitorData = {
      name,
      email,
      password,
      sub,
      picture,
    };

    // blogData.coverImg = await imageMV(file.coverImg, 'blogImages');
    visitorData.picture = await imageMV(file.picture, "blogImages");

    let visitorAdded = await visitorModel.create(visitorData);

    return res
      .status(201)
      .send({ status: true, message: "Visitor added", data: visitorAdded });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// Login
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/users/login",
//     failureFlash: true,
//   })(req, res, next);
// });

// Logout
// router.get("/logout", (req, res) => {
//   req.logout();
//   req.flash("success_msg", "You are logged out");
//   res.redirect("/users/login");
// });

// 662735685445-svt9fusga04lpckp5ef7bnmuu2r4gbcq.apps.googleusercontent.com

module.exports = { addBlogVisitors };
