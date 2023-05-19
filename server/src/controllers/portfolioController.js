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

    let {
      coverImgUrl,
      coverImgAlt,
      title,
      description,
      content,
      tags,
      portfolioField,
    } = data;

    // if (!isValid(title)) {
    //     return res.status(400).send({ status: false, message: 'Title is required'})
    // }

    let portfolioData = {
      
      description,
      portfolioField,
    };

    let key = Math.random().toString(36).slice(2,8);
    portfolioData.title = title;
    portfolioData.portfolioUID = key;
    portfolioData.content = JSON.parse(content);

    portfolioData.tags = tags.split("#").filter((el) => {
      return el.length > 0 && el.trim();
    });
    let obj = {
      coverImgUrl: coverImgUrl,
      coverImgAlt: coverImgAlt ? coverImgAlt : "turtltech.com",
    };

    portfolioData.coverImage = obj;

    portfolioData.seoData = JSON.parse(data.seoData);

    let obj1 = JSON.parse(portfolioField);
    portfolioData.portfolioField = obj1.field;
    portfolioData.categoryTitle = obj1.categoryName;

    let portfolioAdded = await portfolioModel.create(portfolioData);

    return res.status(201).send({
      status: true,
      message: "Portfolio added successfully",
      // data: portfolioAdded,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL PORTFOLIO
const getAllPortfoios = async (req, res) => {
  try {
    let portfolioData = await portfolioModel.find();

    return res.status(200).send({ status: true, data: portfolioData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


// GET BLOG BY BLOG SLUG
const getPortfolioByParams = async (req, res) => {
  try {
    let slug = req.params.slug;

    let portfolio = await portfolioModel.findOne({ slug: slug });
    

    if (!portfolio) {
      return res.status(404).send({ status: false, message: "Portfolio not found" });
    }

    portfolio.portfolioViews = portfolio.portfolioViews + 1;
    await portfolio.save();

    return res.status(200).send({ status: true, data: portfolio });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getPortfolioByField = async (req, res) => {
  try {
    let field = req.params.field;

    let portfolios = await portfolioModel.find({ portfolioField: field });
    

    if (!portfolios) {
      return res.status(404).send({ status: false, message: "Portfolio not found" });
    }
    return res.status(200).send({ status: true, data: portfolios });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addPortfolio, getAllPortfoios, getPortfolioByParams, getPortfolioByField };
