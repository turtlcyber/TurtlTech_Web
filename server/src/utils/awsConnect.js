// const aws = require('aws-sdk');
// const { v4: uuid_v4 } = require("uuid");
// aws.config.update({
//     accessKeyId: "AKIAVYBY4DV4KDIFNUEW",
//     secretAccessKey: "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",
//     region: "ap-south-1"
// })

// let uploadFile= async ( file, existingFileName ) => {
//    return new Promise( function(resolve, reject) {
//     let s3 = new aws.S3(); 
//     // let busAct =    actionFolder.split("_")[1];
//     let preName = uuid_v4() + '_';
//     var uploadParams= {
//         ACL: "bucket-owner-full-control",
//         Bucket: "erpbucket101",
//         Key: `turtltech` + preName + ( existingFileName ? existingFileName : file.name ),
//         Body: file.data
//     }
//     s3.upload( uploadParams, function (err, data ){
//         if(err) {
//             return reject({"error": err})
//         }
//         return resolve(data.Location)
//     })
//    })
// };

// module.exports = { uploadFile };
