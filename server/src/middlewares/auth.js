const adminModel = require("../models/adminModel");
const blogModel = require("../models/blogModel");

const jwt = require("jsonwebtoken");
const { isValidObjectId } = require("../utils/utils");

// Authentication
const Authentication = async function (req, res, next) {
  try {
    // const token = req.headers["x-api-key"] || req.headers["x-Api-key"];
    // console.log(token);
    let tokenWithBearer = req.headers["authorization"];

    if (!tokenWithBearer) {
      return res
        .status(400)
        .send({ status: false, message: "token is required" });
    }

    let tokenArray = tokenWithBearer.split(" ");
    let token = tokenArray[1];
    // console.log(token);

    if (!token) {
      return res.status(404).send({ status: false, message: "Invalid Token" });
    }

    let decodedToken;
    jwt.verify(token, process.env.TOKEN_SECRET_KEY || "TURLTTECH*2023@Developers", (err, decode) => {
      if (err) {
        return res.status(401).send({ status: false, message: err.message });
      } else {
        decodedToken = decode;
        let LoginUserId = decodedToken.adminId;
        req["adminId"] = LoginUserId;
        // console.log(LoginUserId);
        next();
      }
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};



// GET USER ID
const getUserId = async (tokenWithBearer) => {
  if (!tokenWithBearer) {
    return res
      .status(400)
      .send({ status: false, message: "token is required" });
  }
  let tokenArray = tokenWithBearer.split(" ");
  let token = tokenArray[1];
  let LoginUserId;
  
  if (!token) {
    return res.status(404).send({ status: false, message: "Invalid Token" });
  }

  let decodedToken;
  jwt.verify(token, process.env.TOKEN_SECRET_KEY || "TURLTTECH*2023@Developers", (err, decode) => {
    if (err) {
      return res.status(401).send({ status: false, message: err.message });
    } else {
      decodedToken = decode;
      LoginUserId = decodedToken.userId;
      //  console.log(LoginUserId);
    }
  });
  return LoginUserId;
};



// GET USER
const getUser = async (LoginUserId) => {
  let admin = await adminModel.findById(LoginUserId);
  if (admin) {
    return {
      adminId: admin._id.toString(),
    };
  } 
};



// Authorization
const Authorization = async function (req, res, next) {
  try {
    let userid = req.userId;
    if (!isValidObjectId(userid)) {
      return res
        .status(400)
        .send({ status: false, message: `This Admin Id => ${userid}, is invalid` });
    }

    const findUser = await adminModel.findOne({ _id: userid });

    if (!findUser)
      return res.status(404).send({ status: false, message: "Admin not found" });

    next();
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { Authentication, getUserId, getUser, Authorization };
