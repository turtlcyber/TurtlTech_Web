const serviceCategoryModel = require("../models/serviceCategoryModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// ADD SERVICE CATEGORY
const addServiceCategory = async (req, res) => {
  try {
    let data = req.body;

    let { title, iconUrl, iconAlt, description, content, tags } = data;

    let checkTitle = await serviceCategoryModel.findOne({ title: title });

    if (checkTitle) {
      return res
        .status(400)
        .send({
          status: false,
          message:
            "This category is already exists, please enter another category",
        });
    }

    let serviceCategoryData = {
      title,
      description,
      content,
    };

    serviceCategoryData.tags = tags.split("#").filter((el) => {
      return el.length > 0 && el.trim();
    });

    let obj = {
      iconUrl: iconUrl,
      iconAlt: iconAlt ? iconAlt : "turtltech.com",
    };

    serviceCategoryData.categoryIcon = obj;

    await serviceCategoryModel.create(serviceCategoryData);

    return res
      .status(201)
      .send({ status: true, message: "Service category added successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL SERVICE CATEGORIES
const getAllServiceCategories = async (req, res) => {
  try {
    let serviceCategories = await serviceCategoryModel.find();

    return res.status(200).send({ status: true, data: serviceCategories });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL SERVICE CATEGORIES BY SLUG
const getServiceCategorBySlug = async (req, res) => {
  try {
    let slug = req.params.slug;
    let serviceCategory = await serviceCategoryModel.findOne({ slug: slug });

    if (!serviceCategory) {
      return res
        .status(404)
        .send({ status: false, message: "This service category not found" });
    }

    return res.status(200).send({ status: true, data: serviceCategory });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  addServiceCategory,
  getAllServiceCategories,
  getServiceCategorBySlug,
};
