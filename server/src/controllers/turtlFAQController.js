const turtlFAQModel = require("../models/turtlFAQModel");
const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// ADD FAQ
const addFAQ = async (req, res) => {
  try {
    let data = req.body;

    let { category, question, answer } = data;

    let faqData = {
      category,
      question,
      answer,
    };

    await turtlFAQModel.create(faqData);

    return res.status(201).send({ status: true, message: "FAQ section added" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL FAQs
const getAllFAQs = async (req, res) => {
  try {
    let faqs = await turtlFAQModel.find();

    // if (faqs.length === 0) {
    //   return res.status(404).send({ status: false, message: "No FAQ found" });
    // }

    return res.status(200).send({ status: true, data: faqs });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE FAQ BY FAQ ID
const updateFAQById = async (req, res) => {
  try {
    let faqId = req.params.faqId;

    if (!isValidObjectId(faqId)) {
      return res
        .status(400)
        .send({
          status: false,
          message: "Invalid faqId, please enter a valid faqId",
        });
    }

    let faq = await turtlFAQModel.findById(faqId);

    if (!faq) {
      return res
        .status(404)
        .send({ status: false, message: "No FAQ found with this id" });
    }

    let body = req.body;

    if ("category" in body) {
      faq.category = body.category;
    }

    if ("question" in body) {
      faq.question = body.question;
    }

    if ("answer" in body) {
      faq.answer = body.answer;
    }

    await faq.save();

    return res
      .status(200)
      .send({ status: true, message: "FAQ updated successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addFAQ, getAllFAQs, updateFAQById };
