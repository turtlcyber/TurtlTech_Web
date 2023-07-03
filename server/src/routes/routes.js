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
const serviceCategoryController = require('../controllers/serviceCategoryController');
const urlCountController = require('../controllers/urlCountingAPI');
const paymentGatewayController = require('../controllers/paymentGatewayController');
const firebaseImageController = require('../controllers/firebaseImageController');

// const { upload } = require('../middlewares/ImageUpload');
// const upload = multer({ storage: multer.memoryStorage() });


const { Authentication, Authorization } = require('../middlewares/auth');



// Admin's APIs ->
router.post("/admin", adminController.createAdmin);
router.post("/login", adminController.loginAdmin);

// User's APIs
router.post("/user", Authentication, userController.addUser);
router.post("/loginUser", userController.loginUser);


// Likes APIs
router.post("/likes", likesController.addBlogLikesById);
router.post("/like", likesController.addBlogLikes);
router.get("/likes/:id", likesController.getAllLikes);
router.put("/likes/:id", likesController.incBlogLikesById);


// VISITORS APIs
router.post("/visitor", visitorsController.addBlogVisitors);


// BLOG API
router.post("/blog", Authentication, blogController.createBlog);
router.get("/blogs", blogController.getBlogs);
// router.get("/blog/:blogId", blogController.getBlogById);
router.get("/blog/:slug", blogController.getBlogByParams);
router.put("/blog/:blogId", Authentication, blogController.updateBlogById);
router.delete("/blog/:blogId", Authentication, blogController.deleteBlogById);


// IMAGE API
router.post("/imageupload", Authentication, imageController.uploadImagefn);
router.get("/images", imageController.getAllImages);


// SERVICE API
router.post("/service", Authentication, serviceController.addService);
router.get("/services", serviceController.getAllServices);
router.put("/service/:secId", Authentication, serviceController.updateServiceSection);
router.delete("/service/:secId", Authentication, serviceController.deleteServiceSection);

// TESTIMONIAL API
router.post("/testimonial", Authentication, testimonialController.addTestimonial);
router.get("/testimonials", testimonialController.getAllTestimonials);

// PORTFOLIO API
router.post("/portfolio", Authentication, portfolioController.addPortfolio);
router.get("/portfolios", portfolioController.getAllPortfoios);
router.get("/services/:slug", portfolioController.getPortfolioByParams);
router.get("/services/portfolios/:field", portfolioController.getPortfolioByField);

// CERTIFICATE API
router.post("/certificate", Authentication, certificateController.addCertificate);
router.get("/certificates", certificateController.getAllCertificates);

// TURTL INFO API
router.post("/info", Authentication, turtlInfoController.addTurtlInfo);
router.get("/turtlinfo", turtlInfoController.getTurtlInfo);

// EVENT API
router.post("/event", Authentication, eventController.addEvent);
router.get("/events", eventController.getAllEvents);

// PAGE IMAGE API
router.post("/pageimages", Authentication, pageImageController.addPageImages);
router.get("/allpageimages", pageImageController.getAllPageImages);
router.get("/pageimage/:pageName", pageImageController.getImageByPageName);

// TURTL SEO API
router.post("/turtlseo", Authentication, turtlSEOController.addTurtlSEO);
router.get("/getallseos", turtlSEOController.getAllSEO);
router.get("/turtlseo/:pageName", turtlSEOController.getSEOByPageName);
router.put("/turtlseo/:seoId", Authentication, turtlSEOController.updateTurtlSEOData);

// CONTACT US API
router.post("/contactus", Authentication, contactUsController.addContactUsDetails);

// FAQ APIs
router.post("/turtlfaq", Authentication, turtlFAQController.addFAQ);
router.get("/turtlfaqs", turtlFAQController.getAllFAQs);
router.put("/turtlfaq/:faqId", Authentication, turtlFAQController.updateFAQById);

// SERVICE CATEGORY APIs
router.post("/servicecategory", Authentication, serviceCategoryController.addServiceCategory);
router.get("/servicecategories", serviceCategoryController.getAllServiceCategories);
router.get("/servicecategory/:slug", serviceCategoryController.getServiceCategorBySlug);

// URL COUNT API
router.post("/urlcount", urlCountController.getURLCount);

// PAYMENT APIs
router.post("/addpayment", Authentication, paymentGatewayController.addPayment);
router.get("/getpayment", paymentGatewayController.getPayment);

// IMAGE API
router.post("/upload", firebaseImageController.uploadImage);

module.exports = router;