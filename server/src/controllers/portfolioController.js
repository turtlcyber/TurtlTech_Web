const portfolioModel = require("../models/portfolioModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

const { imageMV } = require("../middlewares/ImageUpload");

// ADD PORTFOLIO
const addPortfolio = async (req, res) => {
  try {
    let data = req.body;
    // let file = req.files;

    let { image, title, description, sections, portfolioField } = data;

    if (!isValid(title)) {
        return res.status(400).send({ status: false, message: 'Title is required'})
    }

    let portfolioData = {
      image,
      title,
      description,
      sections,
      portfolioField,
    };

    // portfolioData.image = await imageMV(file.image, "portfolioImg");

    // portfolioData.image.imageUrl = image.imageUrl;
    // portfolioData.image.altText = image.altText ? image.altText : 'turtltech.com';

    let abc = {
      imageUrl: imageUrl,
      altText: altText ? altText : 'turtltech.com'
    }

    portfolioData.image = abc;

    let portfolioAdded = await portfolioModel.create(portfolioData);

    return res
      .status(201)
      .send({
        status: true,
        message: "Portfolio added successfully",
        data: portfolioAdded,
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addPortfolio };