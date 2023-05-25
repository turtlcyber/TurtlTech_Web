const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const cors = require("cors");
app.use(cors());

// const app = express();

const getURLCount = async (req, res) => {
  
  try {
    // const { domain } = req.query;
    let { domain } = req.body;
    // Fetch the HTML content of the domain
    const { data } = await axios.get(domain);

    // Use Cheerio to parse the HTML
    const $ = cheerio.load(data);

    // Find all anchor tags (links) in the HTML
    const anchors = $("a");

    // Count the total number of URLs
    const totalCount = anchors.length;

    return res.status(200).send({ status: true, count: totalCount });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { getURLCount };
