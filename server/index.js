const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const route = require("./src/routes/routes.js");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const passport = require('passport');
const { port, mongoDbUrl } = require("./src/middlewares/config.js");



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
// app.use(helmet());
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(bodyParser.urlencoded({extended: false}));
app.use("/", express.static('public/uploads'));

// app.use('/service', express.static('./public/images/'));

// app.use('/images', express.static('./public/images'));


mongoose
  .connect(
    mongoDbUrl,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected with Database"))
  .catch((err) => console.log(err));

app.use("/", route);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to TurtlTech</h1>");
});

app.listen(port, () =>
  console.log("App is running on port", port)
);
