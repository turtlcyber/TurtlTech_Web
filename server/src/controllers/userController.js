const userModel = require("../models/userModel");
const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const aurhorities = require("../actionType");
const {
  isValidRequestBody,
  isValidObjectId,
  isValid,
  isValidName,
  isvalidEmail,
  isValidMoblie,
  isValidPassword,
} = require("../utils/utils");

const {
  Authentication,
  Authorization,
  getUserId,
  getUser,
} = require("../middlewares/auth");


// ADD USER
const addUser = async function (req, res) {
  try {
    let data = req.body;

    if (!isValidRequestBody(data)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in body" });
    }

    let { name, email, password, mobile, role, joiningDate } = data;

    if (!isValid(name)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter the name" });
    }

    if (!isValidName(name)) {
      return res
        .status(400)
        .send({ status: false, message: "Name should only contain alphabets" });
    }

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

    let checkEmail = await userModel.findOne({
      email: email,
      isDeleted: false,
    });
    if (checkEmail) {
      return res.status(400).send({
        status: false,
        message: "This email is already exists",
      });
    }

    if (!isValidMoblie(mobile))
      return res.status(400).send({
        status: false,
        message: "Invalid mobile number",
      });

    let checkMobile = await userModel.findOne({ mobile: mobile });
    if (checkMobile) {
      return res.status(400).send({
        status: false,
        message: "This mobile is already exists",
      });
    }

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "password is required" });
    }

    if (password.length < 8 || password.length > 15) {
      return res.status(400).send({
        status: false,
        message: "Password must in between 8 to 15 characters",
      });
    }

    if (!isValidPassword(password))
      return res.status(400).send({
        status: false,
        message: `Password must include atleast one special character[@$!%?&], one uppercase, one 
                lowercase, one number and should be mimimum 8 to 15 characters long for Example: Password@123`,
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    if (!isValid(role)) {
      return res
        .status(400)
        .send({ status: false, message: "role is required" });
    }

    const userData = {
      name,
      email,
      password,
      mobile,
      role,
      joiningDate
    };

    // userData.authority = ["ADD_PRODUCT", "SALE_VOID"];

    let addData = await userModel.create(userData);
    delete addData.password
    res.status(201).send({
      status: true,
      message: "User added successfully",
      data: addData,
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// Login User
const loginUser = async function (req, res) {
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
        .send({ status: false, message: "Email is required" });

    if (!isvalidEmail(email))
      return res
        .status(400)
        .send({ status: false, message: "Please enter valid email" });

    if (!isValidPassword(password)) {
      return res.status(400).send({
        status: false,
        message: `Password must include atleast one special character[@$!%?&], one uppercase, one 
            lowercase, one number and should be mimimum 8 to 15 characters long for Example:Password@123`,
      });
    }

    if (!isValid(password))
      return res
        .status(400)
        .send({ status: false, message: "Password is required" });

    let admin = await adminModel.findOne({ email: email });
    let adminId;
    let user;
    if (!admin) {
      user = await userModel.findOne({ email: email, isDeleted: false });

      if (!user) {
        return res
          .status(401)
          .send({ status: false, message: "Please use valid credentials" });
      } else {
        adminId = user._id.toString();
      }
    } else {
      adminId = admin._id.toString();
    }

    bcrypt.compare(
      password,
      admin ? admin.password : user.password,
      function (err, result) {
        hasAccess(result);
      }
    );

    function hasAccess(result) {
      if (result) {
        let token = jwt.sign(
          {
            userId: admin ? admin._id.toString() : user._id.toString(),
            Application: "turtltechbackend",
            Author: "nirajkumar",
          },
          process.env.TOKEN_SECRET_KEY || "TURLTTECH*2023@Developers",
          { expiresIn: "24h" }
        );
        // res.setHeader("x-api-key", token);
        res.setHeader("Authorization", "Bearer", token);

        if (!admin) {
          user.password = "";
          if (user.role === "ADMIN") {
            return res.status(201).send({
              status: true,
              message: "Successfully loggedin",
              userId: user._id,
              userInfo: user,
              token: token,
            });
          }
          if (user.authority.includes("HR")) {
            appData1.permissionsList = permissionsList;
            appData1.employees = employees;
          }

          return res.status(201).send({
            status: true,
            message: "Successfully loggedin",
            userId: user._id,
            userInfo: user,
            token: token,
          });

        } else {
          admin.password = "";
          return res.status(201).send({
            status: true,
            message: "Successfully loggedin",
            userId: admin._id,
            userInfo: admin,
            authority: aurhorities.userAuthorities,
            token: token
          });
        }
      } else {
        return res.status(401).send({
          status: false,
          message: "login denied",
        });
      }
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

// CREATE USER
const createUser = async function (req, res) {
  try {
    let data = req.body;

    let userId = await getUserId(req.headers["authorization"]);
    let userInfo = await getUser(userId);

    if (userInfo.userType === "ADMIN") {
      // let adminId = req.params.adminId || req.query.adminId;

      if (!isValidRequestBody(data)) {
        return res
          .status(400)
          .send({ status: false, message: "Please enter data in body" });
      }

      let {
        name,
        email,
        password,
        gender,
        DOB,
        mobile,
        role,
        authority,
        joiningDate,
      } = data;

      if (!isValid(name)) {
        return res
          .status(400)
          .send({ status: false, message: "Please enter the name" });
      }

      if (!isValidName(name)) {
        return res.status(400).send({
          status: false,
          message: "Name should only contain alphabets",
        });
      }

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

      let checkEmail = await userModel.findOne({
        email: email,
        isDeleted: false,
      });
      if (checkEmail) {
        return res.status(400).send({
          status: false,
          message: "This email is already exists",
        });
      }

      if (!isValid(gender)) {
        return res
          .status(400)
          .send({ status: false, message: "Gender is required" });
      }

      if (!isValid(DOB)) {
        return res
          .status(400)
          .send({ status: false, message: "DOB is required" });
      }

      if (!isValidMoblie(mobile))
        return res.status(400).send({
          status: false,
          message: "Invalid mobile number",
        });

      let checkMobile = await userModel.findOne({
        mobile: mobile,
        isDeleted: false,
      });
      if (checkMobile) {
        return res.status(400).send({
          status: false,
          message: "This mobile is already exists",
        });
      }

      if (!isValid(password)) {
        return res
          .status(400)
          .send({ status: false, message: "password is required" });
      }

      if (password.length < 8 || password.length > 15) {
        return res.status(400).send({
          status: false,
          message: "Password must in between 8 to 15 characters",
        });
      }

      if (!isValidPassword(password))
        return res.status(400).send({
          status: false,
          message: `Password must include atleast one special character[@$!%?&], one uppercase, one 
                  lowercase, one number and should be mimimum 8 to 15 characters long for Example: Password@123`,
        });

      const hashedPassword = await bcrypt.hash(password, 10);
      password = hashedPassword;

      if (!isValid(role)) {
        return res
          .status(400)
          .send({ status: false, message: "role is required" });
      }

      const userData = {
        name,
        email,
        password,
        gender,
        DOB,
        mobile,
        role,
        authority,
        joiningDate,
      };

      userData.adminId = userInfo.adminId;
      if (role === "ADMIN") {
        userData.authority = [];
      }

      let addData = await (
        await userModel.create(userData)
      ).populate("adminId");

      addData.password = "";

      res.status(201).send({
        status: true,
        message: "User added successfully",
        data: addData,
      });
    } else {
      res.status(403).send({
        status: false,
        message: "You are not authorize to add employees",
      });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

// GET USER DETAILS WITH SALARY
const getEmpDetailsWithSalary = async (req, res) => {
  try {
    let userId = await getUserId(req.headers["authorization"]);
    let userInfo = await getUser(userId);

    let employees = await userModel.find({
      adminId: userInfo.adminId,
      isDeleted: false,
    });

    if (employees.length === 0) {
      return res.status(404).send({
        status: false,
        message: "No employee found with this admin id",
      });
    }

    res.status(200).send({ status: true, employeesData: employees });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE USER BY USER ID
const updateUserById = async (req, res) => {
  try {
    let employeeId = req.params.id;

    let userId = await getUserId(req.headers["authorization"]);
    let userInfo = await getUser(userId);

    if (!isValidObjectId(employeeId)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid employee id, please enter" });
    }

    let employee = await userModel.findOne({
      _id: employeeId,
      adminId: userInfo.adminId,
      isDeleted: false,
    });

    if (!employee) {
      return res
        .status(404)
        .send({ status: false, message: "No employee found" });
    }

    let body = req.body;

    if (!isValidRequestBody(body)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in body" });
    }

    if ("name" in body && body.name !== "") {
      employee.name = body.name;
    }

    if ("email" in body && body.email !== "") {
      employee.email = body.email;
    }

    if ("password" in body && body.password !== "") {
      employee.password = body.password;
      const hashedPassword = await bcrypt.hash(password, 10);
      password = hashedPassword;
    }

    if ("gender" in body && body.gender !== "") {
      employee.gender = body.gender;
    }

    if ("DOB" in body && body.DOB !== "") {
      employee.DOB = body.DOB;
    }

    if ("mobile" in body && body.mobile !== "") {
      employee.mobile = body.mobile;
    }

    if ("role" in body && body.role !== "") {
      employee.role = body.role;
    }

    if ("authority" in body && body.authority.length !== 0) {
      employee.authority = body.authority;
    }

    if ("joiningDate" in body && body.joiningDate !== "") {
      employee.joiningDate = body.joiningDate;
    }

    await employee.save();
    employee.password = "";
    res.status(200).send({
      status: true,
      message: "Employee data updated",
      data: employee,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// DELETE USER BY USER ID
const deleteUserById = async (req, res) => {
  try {
    let employeeId = req.params.id;

    let userId = await getUserId(req.headers["authorization"]);
    let userInfo = await getUser(userId);

    if (!isValidObjectId(employeeId)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid employee id" });
    }

    let deleteEmployee = await userModel.findOneAndUpdate(
      {
        _id: employeeId,
        adminId: userInfo.adminId,
        isDeleted: false,
      },

      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      { new: true }
    );

    if (!deleteEmployee) {
      return res.status(404).send({
        status: false,
        message: "Employee not found or already deleted",
      });
    }

    res
      .status(200)
      .send({ status: true, message: "Employee deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addUser,
  loginUser,
  createUser,
  getEmpDetailsWithSalary,
  updateUserById,
  deleteUserById,
};
