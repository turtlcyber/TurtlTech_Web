const turtlSEOModel = require("../models/turtlSEOModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// ADD TURTL SEO
const addTurtlSEO = async (req, res) => {
  try {
    let data = req.body;

    let { pageName, seoData } = data;

    // console.log("Hello example", data);

    if (!isValid(pageName)) {
      return res
        .status(400)
        .send({ status: false, message: "Page name is required" });
    }

    let checkPageName = await turtlSEOModel.findOne({ pageName: pageName });

    if (checkPageName) {
      return res.status(400).send({
        status: false,
        message:
          "This page SEO is already done, please try for different pages or edit this page SEO",
      });
    }

    await turtlSEOModel.create(data);

    return res.status(201).send({ status: true, message: "Turtl SEO added" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL TURTL SEO
const getAllSEO = async (req, res) => {
  try {
    let turtlseos = await turtlSEOModel.find();

    // if (turtlseos.length === 0) {
    //   return res
    //     .status(404)
    //     .send({ status: false, message: "No SEO name found" });
    // }

    return res.status(200).send({ status: true, data: turtlseos });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET PAGE SEO by Name
const getSEOByPageName = async (req, res) => {
  try {
    let turtlseos = await turtlSEOModel.findOne({
      pageName: req.params.pageName,
    });

    if (!turtlseos) {
      return res.status(404).send({ status: false, message: "No Page found" });
    }

    return res.status(200).send({ status: true, data: turtlseos });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE TURTL SEO DATA
const updateTurtlSEOData = async (req, res) => {
  try {
    let seoId = req.params.seoId;

    if (!isValidObjectId(seoId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid pageId, please enter a valid pageId",
      });
    }

    let pageSEO = await turtlSEOModel.findById(seoId);

    if (!pageSEO) {
      return res.status(404).send({
        status: false,
        message: "No page found with this page id",
      });
    }

    let body = req.body;

    let seoData = {};
 
    if ("seoData" in body) {
      
      if ("pageTitle" in body.seoData) {

        pageSEO.seoData.pageTitle = body.seoData.pageTitle;
      }

      if ("pageDescription" in body.seoData) {
        pageSEO.seoData.pageDescription = body.seoData.pageDescription;
      }

      if ("pageKeywords" in body.seoData) {
        pageSEO.seoData.pageKeywords = body.seoData.pageKeywords;
      }

      if ("pageUrl" in body.seoData) {
        pageSEO.seoData.pageUrl = body.seoData.pageUrl;
      }

      if ("imageUrl" in body.seoData) {
        pageSEO.seoData.imageUrl = body.seoData.imageUrl;
      }

      if ("siteName" in body.seoData) {
        pageSEO.seoData.siteName = body.seoData.siteName;
      }

      if ("altImageText" in body.seoData) {
        pageSEO.seoData.altImageText = body.seoData.altImageText;
      }

      if ("imageHight" in body.seoData) {
        pageSEO.seoData.imageHight = body.seoData.imageHight;
      }

      if ("imageWidth" in body.seoData) {
        pageSEO.seoData.imageWidth = body.seoData.imageWidth;
      }
    }

    await pageSEO.save();

    return res
      .status(200)
      .send({ status: true, message: "Page SEO data updated successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addTurtlSEO,
  getAllSEO,
  updateTurtlSEOData,
  getSEOByPageName,
};
