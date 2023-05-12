const visitorModel = require("../models/visitorModel");
const bcrypt = require("bcrypt");
const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
} = require("../utils/utils");

// ADD VISITORS
const addBlogVisitors = async (req, res) => {
  try {
    let data = req.body;

    let { name, email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    let visitorData = {
      name,
      email,
      password,
    };

    let visitorAdded = await visitorModel.create(visitorData);

    return res
      .status(201)
      .send({ status: true, message: "Visitor added", data: visitorAdded });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addBlogVisitors };
