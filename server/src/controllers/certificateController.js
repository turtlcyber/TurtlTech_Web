const certificateModel = require("../models/certificateModel");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isvalidEmail,
} = require("../utils/utils");

// const { imageMV } = require("../middlewares/ImageUpload");

// ADD CERTIFICATE
const addCertificate = async (req, res) => {
  try {
    let data = req.body;
    
    let certificateData = []
    if (typeof data.certificate === 'string') {
      certificateData.push(JSON.parse(data.certificate));
    } else {

      for (let i=0; i<data.certificate.length; i++) {
        certificateData.push(JSON.parse(data.certificate[i]));
      }
    }
    
    for (let i=0; i<certificateData.length; i++) {
      await certificateModel.create(certificateData[i]);
    }
    
    return res
      .status(201)
      .send({
        status: true,
        message: "Certificate added successfully"
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


// GET ALL CERTIFICATES
const getAllCertificates = async (req, res) => {
  try {
    let certificates = await certificateModel.find();

    // if (certificates.length === 0) {
    //   return res.status(404).send({ status: false, message: 'No certificate found'});
    // }

    return res.status(200).send({ status: true, data: certificates })

  } catch (error) {
    return res.status(500).send({ status: false, message: error.message })
  }
}

module.exports = { addCertificate, getAllCertificates };
