const turtlInfoModel = require("../models/turtlInfoModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// const { imageMV } = require("../middlewares/ImageUpload");

// ADD TURTL INFO
const addTurtlInfo = async (req, res) => {
  try {
    let data = req.body;
    // console.log("Hello example", data);
    let { serviceEmail, address, contactNumber, socialMediaLinks, googleMap } =
      data;

    // if (!isValid(serviceEmail)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, message: "Service email is required" });
    // }

    // if (!isValid(address)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, message: "Address is required" });
    // }

    // if (!isValid(contactNumber)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, message: "Contact number is required" });
    // }

    // if (!isValid(contactNumber)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, message: "Contact number is required" });
    // }

    // let turtlInfoData = {
    //     serviceEmail,
    //     address,
    //     contactNumber,
    //     socialMediaLinks,
    //     googleMap
    // };

    // let obj = {
    //   pageName: pageName,
    //   imageUrl: imageUrl,
    //   altText: altText ? altText : 'turtltech.com'
    // }

    // turtlInfoData.pageImages = obj;

    // let obj = {
    //   types: type,
    //   url: url,
    // }

    let obj = [];
    if (typeof socialMediaLinks === "string") {
      obj.push(JSON.parse(socialMediaLinks));
    } else {
      for (let i = 0; i < socialMediaLinks.length; i++) {
        obj.push(JSON.parse(socialMediaLinks[i]));
      }
    }

    // turtlInfoData.socialMediaLinks = obj;
    let objData = {
      serviceEmail,
        address,
        contactNumber,
        socialMediaLinks,
        googleMap
    }

    objData.socialMediaLinks = obj;
    let turtlInfoAdded = await turtlInfoModel.create(objData);
    // console.log('Hello example', obj);

    return res.status(201).send({
      status: true,
      message: "Turtl info added successfully",
      // data: turtlInfoAdded
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

//

module.exports = { addTurtlInfo };
