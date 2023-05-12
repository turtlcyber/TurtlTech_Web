const {v4: uuid} = require('uuid');
const fs = require('fs');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const path1 = "./public/images/";
//         fs.mkdirSync(path1, {recursive: true })
//         cb(null, path1);
//     },
//     filename: function (req, file, cb) {
//         return cb(null, Date.now() + "-Images" + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// module.exports = { upload };

//middleware

const imageMV = async (image, folderName) => {
  const path = `./public/uploads/${folderName}/`;
  fs.mkdirSync(path, { recursive: true });
  let preName = uuid()+'_';
  await image.mv(path + preName + image.name);
  return `/${folderName}/${preName}${image.name}`;
};


module.exports = { imageMV }