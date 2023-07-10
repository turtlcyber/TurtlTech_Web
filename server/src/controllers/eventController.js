const eventModel = require("../models/eventModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// ADD EVENT
const addEvent = async (req, res) => {
  try {
    let data = req.body;
    // console.log('Hello example', data);
    let { title, images, story } = data;

    
    await eventModel.create({title, images, story});

    return res.status(201).send({
      status: true,
      message: "Event added successfully",
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL EVENT
const getAllEvents = async (req, res) => {
  try {
    let events = await eventModel.find();

    // if (events.length === 0) {
    //   return res.status(404).send({ status: false, message: "No event found" });
    // }

    return res.status(200).send({ status: true, data: events });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addEvent, getAllEvents };
