const serviceModel = require("../models/serviceModel");
const userModel = require("../models/userModel");
const adminModel = require("../models/adminModel");
const { upload } = require("../middlewares/ImageUpload");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
} = require("../utils/utils");

// ADD CONTENT
const addContent = async (req, res) => {
  try {
    let data = req.body;
    let file = req.file;

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

    let { content, adminId } = data;

    let sectionData = {
      content,
      adminId,
    };

    sectionData.imageUrl = `http://localhost:4001/service/${req.file.filename}`;
    // sectionData.ImageFile = imageUrl;

    let createSection = await (
      await serviceModel.create(sectionData)
    ).populate("adminId");

    res.status(201).send({
      status: true,
      message: "Service section added",
      data: createSection,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET SERVICES
const getAllServices = async (req, res) => {
  try {
    let services = await serviceModel.find().populate("adminId");

    if (!services.length) {
      return res
        .status(404)
        .send({ status: false, message: "No service found" });
    }

    res.status(200).send({ status: true, services: services });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE SERVICE SECTION
const updateServiceSection = async (req, res) => {
  try {
    let secId = req.params.secId;

    if (!isValidObjectId(secId)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid section Id" });
    }

    let data = await serviceModel.findById(secId);

    if (!data) {
      return res
        .status(404)
        .send({ status: false, message: "No section found with this id" });
    }

    let reqBody = req.body;
    let file = req.file;

    let { content, ImageFile } = reqBody;
    console.log(reqBody);
    console.log("content: ", content, "file:", ImageFile);

    if ("content" in reqBody) {
      data.content = content;
    }

    if (file && file.length > 0) {
      let url = `http://localhost:4001/service/${req.file.filename}`;
      data.ImageFile = url;
    }

    await data.save();

    res.status(200).send({ status: true, message: "Section updated" });
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

    res
      .status(200)
      .send({ status: true, message: "Service section deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addContent,
  getAllServices,
  updateServiceSection,
  deleteServiceSection,
  UpdateSectionById,
};
