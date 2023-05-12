const imageModel = require('../models/imageModel');
const adminModel = require('../models/adminModel');
const { upload } = require('../middlewares/ImageUpload');
const { isValid, isValidName, isValidRequestBody, isValidObjectId } = require('../utils/utils');


// UPLOAD IMAGE
const uploadImage = async (req, res) => {
    try {
        let data = req.body;
        let files = req.files;
        // console.log('Hello example', files);

        // if (!isValidRequestBody(body)) {
        //     return res.status(400)
        //     .send({ status: false, message: 'Please enter data in body'})
        // }

        let { images } = data;

        let imageData = { images }

        imageData.img1Url = `http://localhost:4001/images/${req.files[0].filename}`;
        imageData.img2Url = `http://localhost:4001/images/${req.files[1].filename}`;
        imageData.img3Url = `http://localhost:4001/images/${req.files[2].filename}`;

        let imagesData = await imageModel.create(imageData);

        return res.status(201).send({ status: true, message: 'Image added', data: imagesData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { uploadImage }


// let str = '/blogImages/f372c18b-5afe-4758-8504-bde7e5744ed2_img4.png';
// let str1 = str.slice(12);
// console.log(str1);


