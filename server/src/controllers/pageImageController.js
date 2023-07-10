const pageImageModel = require("../models/pageImagesModel");

const addPageImages = async (req, res) => {
  try {
    let data = req.body;

    let { pageName, imageUrl, altText } = data;

    let checkPageName = await pageImageModel.findOne({ pageName: pageName });

    if (checkPageName) {
      checkPageName.imageUrl = imageUrl;
      checkPageName.altText = altText;
      await checkPageName.save();
      return res
        .status(200)
        .send({ status: true, message: "Page image updated" });
    }
    // console.log('Hello example', data);
    await pageImageModel.create(data);
    return res.status(201).send({ status: true, message: "Page images added" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL PAGE IMAGES
const getAllPageImages = async (req, res) => {
  try {
    let pageImages = await pageImageModel.find();

    // if (pageImages.length === 0) {
    //   return res
    //     .status(404)
    //     .send({ status: false, message: "No page image found" });
    // }

    return res.status(200).send({ status: true, data: pageImages });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET IMAGE BY PAGE NAME
const getImageByPageName = async (req, res) => {
  try {
    let pageName = req.params.pageName;

    let pageImage = await pageImageModel.findOne({ pageName: pageName });

    if (!pageName) {
      return res
        .status(404)
        .send({
          status: false,
          message: "No page image found with this page name",
        });
    }

    return res.status(200).send({ status: true, data: pageImage });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addPageImages, getAllPageImages, getImageByPageName };
