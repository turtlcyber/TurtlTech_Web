const testimonialModel = require("../models/testimonialModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");


// ADD TESTIMONIAL
const addTestimonial = async (req, res) => {
  try {
    let data = req.body;

    let testimonialData = []
    if (typeof data.testimonials === 'string') {
      testimonialData.push(JSON.parse(data.testimonials));
    } else {

      for (let i=0; i<data.testimonials.length; i++) {
        testimonialData.push(JSON.parse(data.testimonials[i]));
      }
    }
    
    for (let i=0; i<testimonialData.length; i++) {
      await testimonialModel.create(testimonialData[i]);
    }
   
    return res
      .status(201)
      .send({
        status: true,
        message: "Testimonial added successfully",
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


// GET ALL TESTIMONIALS
const getAllTestimonials = async (req, res) => {
  try {
    let testimonials = await testimonialModel.find();

    if (testimonials.length === 0) {
      return res.status(404).send({ status: false, message: 'No testimonial found'});
    }

    return res.status(200).send({ status: true, data: testimonials })

  } catch (error) {
    return res.status(500).send({ status: false, message: error.message })
  }
}


module.exports = { addTestimonial, getAllTestimonials };
