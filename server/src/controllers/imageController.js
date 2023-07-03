const imageModel = require("../models/imageModel");
const { uploadImage } = require('../controllers/firebaseImageController');
const {
  isValid,
  isValidName,
  isValidRequestBody,
  isValidObjectId,
} = require("../utils/utils");

// UPLOAD IMAGE
const uploadImagefn = async (req, res) => {
  try {

    let { imgField } = req.body;
    let {images} = req.files;

    let img = await uploadImage(images);
    let imageData = {
      imageUrl:img.imageURL,
      imgField:imgField
     };
    let imagesData = await imageModel.create(imageData);

    return res
      .status(201)
      .send({ status: true, message: "Image added", data: imagesData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL IMAGES
const getAllImages = async (req, res) => {
  try {
    let images = await imageModel.find().sort({ createdAt: -1 });

    if (images.length === 0) {
      return res.status(404).send({ status: false, message: "No image found" });
    }

    return res.status(200).send({ status: true, data: images });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { uploadImagefn, getAllImages };
