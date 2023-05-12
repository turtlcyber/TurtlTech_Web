const disLikeModel = require("../models/disLikeModel");
const likesModel = require("../models/likesModel");
const blogModel = require("../models/blogModel");
const visitorModel = require("../models/visitorModel");

const {
  isValid,
  isValidRequestBody,
  isValidObjectId,
  isvalidEmail,
  isValidPassword,
  isValidMoblie,
} = require("../utils/utils");
const userModel = require("../models/userModel");

// UPDATE DISLIKES
const updateDislikesById = async (req, res) => {
  try {
    let data = req.body;

    let { blogId, dislike, love, haha, wow, angry, fire } = data;

    let dislikes = await disLikeModel.findOne({ blogId: blogId });

    if (!dislikes) {
      let dislikeData = await disLikeModel.create(data);

      return res
        .status(201)
        .send({ status: true, message: "Dislike added", data: dislikeData });
    } else if ("dislike" in data) {
      dislikes.dislike = dislikes.dislike + 1;

      if (dislikes.dislike > 1) {
        dislikes.dislike = 1;
      };

      await dislikes.save();
      return res.status(400).send({ status: true, message: 'dislike added', data: dislikes })
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// Get All Dislikes
const createUser = async (req, res) => {
  try {
    let data = req.body;

    if (!isValidRequestBody(data)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in body" });
    }

    let { name, email, password, mobile } = data;

    if (!isValid(name)) {
      return res
        .status(400)
        .send({ status: false, message: "Name is required" });
    }

    if (!isValid(email)) {
      return res
        .status(400)
        .send({ status: false, message: "Email is required" });
    }

    if (!isvalidEmail(email)) {
      return res
        .status(400)
        .send({
          status: false,
          message: "Invalid email, please enter a valid email",
        });
    }

    let checkEmail = await userModel.findOne({ email: email });

    if (checkEmail) {
      return res
        .status(400)
        .send({
          status: false,
          message:
            "This email is alredy exists, please enter a unique email id",
        });
    }

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "Password is required" });
    }

    if (!isValidPassword(password)) {
      return res
        .status(400)
        .send({
          status: false,
          message:
            "Password must contain atleast one upper char, one lower char, one special char and one number and password length should be in between 8-15",
        });
    }

    if (!isValid(mobile)) {
      return res.status.send({ status: false, message: "Mobile is required" });
    }

    if (!isValidMoblie(mobile)) {
      return res
        .status(400)
        .send({
          status: false,
          message: "Invalid mobile number, please enter a valid mobile number",
        });
    }

    let checkMobile = await userModel.findOne({ mobile: mobile });

    if (checkMobile) {
      return res
        .status(400)
        .send({
          status: false,
          message:
            "This mobile number is already exists, please enter a new mobile number",
        });
    }

    let userData = {
      name,
      email,
      password,
      mobile,
    };

    let createUser = await userModel.create(userData);

    return res
      .status(201)
      .send({ status: true, message: "User created", data: createUser });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


// 

module.exports = { updateDislikesById, createUser };