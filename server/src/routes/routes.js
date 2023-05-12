const express = require('express');
const app = express();
const router = express.Router();

// app.use('/service', express.static('./public/images/'));

const adminController = require("../controllers/adminController");
const userController = require('../controllers/userController');
const blogController = require("../controllers/blogController")
const serviceController = require('../controllers/serviceController');
const imageController = require('../controllers/imageController');
const likesController = require('../controllers/likesController');
const visitorsController = require('../controllers/visitorController');
const { upload } = require('../middlewares/ImageUpload');

const { Authentication, Authorization } = require('../middlewares/auth');
const visitorModel = require('../models/visitorModel');


// Admin's APIs ->
router.post("/admin", adminController.createAdmin);
router.post("/login", adminController.loginAdmin);

// User's APIs
router.post("/user", userController.addUser);
router.post("/loginUser", userController.loginUser);


// Likes APIs
router.post("/likes", likesController.addBlogLikesById);
router.post("/like", likesController.addBlogLikes);
router.get("/likes/:id", likesController.getAllLikes);
router.put("/likes/:id", likesController.incBlogLikesById);


// VISITORS APIs
router.post("/visitor", visitorsController.addBlogVisitors);


// BLOG API
router.post("/blog", blogController.createBlog);
router.get("/blogs", blogController.getBlogs);
// router.get("/blog/:blogId", blogController.getBlogById);
router.get("/blog/:slug", blogController.getBlogByParams);
router.put("/blog/:blogId", blogController.updateBlogById);
router.delete("/blog/:blogId", blogController.deleteBlogById);


// SERVICE API
router.post("/service", serviceController.addContent);
router.get("/services", serviceController.getAllServices);
router.put("/service/:secId", serviceController.updateServiceSection);
router.put("/section/:secId", serviceController.UpdateSectionById);
router.delete("/service/:secId", serviceController.deleteServiceSection);

// IMAGE API
router.post("/images", imageController.uploadImage);


module.exports = router;