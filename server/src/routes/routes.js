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
const testimonialController = require('../controllers/testimonialController');
const portfolioController = require('../controllers/portfolioController');
const certificateController = require('../controllers/certificateController');
const turtlInfoController = require('../controllers/turtlInfoController');
const eventController = require('../controllers/eventController');
const pageImageController = require('../controllers/pageImageController');
const turtlSEOController = require('../controllers/turtlSEOController');
const contactUsController = require('../controllers/contactUsController');
const turtlFAQController = require('../controllers/turtlFAQController');
const { upload } = require('../middlewares/ImageUpload');

const { Authentication, Authorization } = require('../middlewares/auth');



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


// IMAGE API
router.post("/image", imageController.uploadImage);
router.get("/images", imageController.getAllImages);


// SERVICE API
router.post("/service", serviceController.addService);
router.get("/services", serviceController.getAllServices);
router.put("/service/:secId", serviceController.updateServiceSection);
router.delete("/service/:secId", serviceController.deleteServiceSection);

// TESTIMONIAL API
router.post("/testimonial", testimonialController.addTestimonial);
router.get("/testimonials", testimonialController.getAllTestimonials);

// PORTFOLIO API
router.post("/portfolio", portfolioController.addPortfolio);

// CERTIFICATE API
router.post("/certificate", certificateController.addCertificate);
router.get("/certificates", certificateController.getAllCertificates);

// TURTL INFO API
router.post("/info", turtlInfoController.addTurtlInfo);

// EVENT API
router.post("/event", eventController.addEvent);
router.get("/events", eventController.getAllEvents);

// PAGE IMAGE API
router.post("/pageimages", pageImageController.addPageImages);
router.get("/allpageimages", pageImageController.getAllPageImages);
router.get("/pageimage/:pageName", pageImageController.getImageByPageName);

// TURTL SEO API
router.post("/turtlseo", turtlSEOController.addTurtlSEO);
router.get("/getallseos", turtlSEOController.getAllSEO);
router.get("/turtlseo/:pageName", turtlSEOController.getSEOByPageName);
router.put("/turtlseo/:pageId", turtlSEOController.updateTurtlSEOData);

// CONTACT US API
router.post("/contactus", contactUsController.addContactUsDetails);

// FAQ APIs
router.post("/turtlfaq", turtlFAQController.addFAQ);
router.get("/turtlfaqs", turtlFAQController.getAllFAQs);
router.put("/turtlfaq/:faqId", turtlFAQController.updateFAQById);


module.exports = router;