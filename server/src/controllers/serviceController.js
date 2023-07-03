const serviceModel = require("../models/serviceModel");
const userModel = require("../models/userModel");
const adminModel = require("../models/adminModel");
const { imageMV } = require("../middlewares/ImageUpload");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
} = require("../utils/utils");

// ADD CONTENT
const addService = async (req, res) => {
  try {
    let data = req.body;
    let file = req.files;

    // console.log("content:", data.content, "file", file.filename);

    if (!isValidRequestBody(data)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in body" });
    }

    // if (file.length === 0) {
    //   return res.status(400)
    //   .send({ status: false, message: 'Please add atleast one file'})
    // }

    let { title, description, imgUrl } = data;

    let serviceData = {
      title,
      description,
      imgUrl
    };

    serviceData.imgUrl = await imageMV(file.imgUrl, "serviceImages");

    let createService = await serviceModel.create(serviceData);

    return res.status(201).send({
      status: true,
      message: "Service section added",
      data: createService,
    });

  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET SERVICES
const getAllServices = async (req, res) => {
  try {
    let services = await serviceModel.find();

    if (!services.length) {
      return res
        .status(404)
        .send({ status: false, message: "No service found" });
    }

    return res.status(200).send({ status: true, services: services });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE SERVICE SECTION
const updateServiceSection = async (req, res) => {
  try {
    let serviceId = req.params.serviceId;

    if (!isValidObjectId(secId)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid section Id" });
    }

    let data = await serviceModel.findById(serviceId);

    if (!data) {
      return res
        .status(404)
        .send({ status: false, message: "No section found with this id" });
    }

    let reqBody = req.body;

    let file = req.files;

    let { title, description, imgUrl } = reqBody;
    
    if ("title" in reqBody) {
      data.title = title;
    }

    if ("description" in reqBody){
      data.description = description;
    }

    // if (file && file.length > 0) {
    //   let url = `http://localhost:4001/service/${req.file.filename}`;
    //   data.ImageFile = url;
    // }

    await data.save();

    return res.status(200).send({ status: true, message: "Section updated", data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// Update User By User Id
const UpdateSectionById = async function (req, res) {
  try {
    let secId = req.params.secId;

    if (!isValidObjectId(secId)) {
      return res.status(400).send({ status: false, message: 'Invalid section id, please enter a valid section id'})
    }

    let data = req.body;
    // console.log(data);

    return res
      .status(200)
      .send({
        status: true,
        message: "Section updated successfully",
        data: data,
      });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

// DELETE SERVICE SECTION
const deleteServiceSection = async (req, res) => {
  try {
    let secId = req.params.secId;

    if (!isValidObjectId(secId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid section id, please enter a valid section id",
      });
    }

    let deleteSection = await serviceModel.deleteOne({ _id: secId });

    if (!deleteSection) {
      return res.status(404).send({
        status: false,
        message: "Section not found or already deleted",
      });
    }

    return res
      .status(200)
      .send({ status: true, message: "Service section deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addService,
  getAllServices,
  updateServiceSection,
  deleteServiceSection,
  UpdateSectionById,
};
