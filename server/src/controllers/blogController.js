const blogModel = require("../models/blogModel");
const adminModel = require("../models/adminModel");
const userModel = require('../models/userModel');
const likesModel = require('../models/likesModel');
const fs = require('fs');
const path = require('path');




const { upload, imageMV } = require("../middlewares/ImageUpload");

// const { getUserId, getUser } = require("../middlewares/auth");

const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
  isValidImg
} = require("../utils/utils");

// CREATE BLOG
const createBlog = async (req, res) => {
  try {

    let data = req.body;
    
    let {
      blogTitle,
      tags,
      description,
      sections,
      coverImgUrl,
      coverImgAlt
    } = data;

    // console.log('section', sections);
    // console.log('Hello example', JSON.parse(sections));

    if (!isValid(blogTitle)) {
      return res
        .status(400)
        .send({ status: false, message: "Blog title is required" });
    }

    if (!isValid(description)) {
      return res
        .status(400)
        .send({ status: false, message: "Description is required" });
    }

    let blogData = {
      blogTitle,
      tags,
      description
    };

    blogData.tags = tags.split('#').filter(el => {
      return el.length > 0 && el.trim();
    });
    // console.log('Hello example', tags);

    let key = Math.random().toString(36).slice(2,8);

    blogData.blogUID = key;
    blogData.isPublished = true;
    blogData.publishedAt = new Date();
   
    let secArr = [];
    for (let sec of JSON.parse(sections)) {
      secArr.push({content: sec});
    }

    // for (let i in file) {
    //   // secArr[parseInt(i.split('_')[1])].img = 'hello'
    //   // parseInt(i.split('_')[1]) >= 0 ? console.log("idx", parseInt(i.split('_')[1])) : '';
    //   parseInt(i.split('_')[1]) >= 0 ? secArr[parseInt(i.split('_')[1])].imgUrl = await imageMV(file[i], 'blogImages') : '';
    // }
    // console.log('hello', secArr);
    // blogData.coverImg = await imageMV(file.coverImg, 'blogImages');
    // blogData.coverImg.imageUrl = await imageMV(file.coverImg, 'blogImages');
    // console.log('Hello example', req.body);

    let abc = {
      imageUrl: coverImgUrl,
      altText: coverImgAlt ? coverImgAlt : 'turtltech.com'
    }
    blogData.coverImg = abc;

   
    // blogData.coverImg.altText = coverImgAlt ? coverImgAlt : 'turtltech.com';

    blogData.sections = secArr;

    
    let blog = await blogModel.create(blogData);
    // console.log("Testing", blogData);

    return res.status(201).send({
      status: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL BLOGS
const getBlogs = async (req, res) => {
  try {
    let blogs = await blogModel.find({ isPublished: true }).sort({ createdAt: 'desc' });

    if (!blogs) {
      return res.status(404).send({ status: false, message: "No blog found" });
    }

    res.status(200).send({ status: true, blogs: blogs });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET BLOG BY BLOG ID
const getBlogById = async (req, res) => {
  try {
    let blogId = req.params.blogId;

    if (!isValidObjectId(blogId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid blog id, please enter a valid blog id in params",
      });
    }

    let blog = await blogModel.findById(blogId);

    if (!blog) {
      return res.status(404).send({ status: false, message: "Blog not found" });
    }

    res.status(200).send({ status: true, blog: blog });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET BLOG BY BLOG SLUG
const getBlogByParams = async (req, res) => {
  try {
    let slug = req.params.slug;

    let blog = await blogModel.findOne({slug: slug});

    if (!blog) {
      return res.status(404).send({ status: false, message: "Blog not found" });
    }

    res.status(200).send({ status: true, blog: blog });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE BLOG BY BLOG ID
const updateBlogById = async (req, res) => {
  try {
    let blogId = req.params.blogId;

    if (!isValidObjectId(blogId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid blog id, please enter a valid blog id in params",
      });
    }

    let blog = await blogModel.findById(blogId);

    if (!blog) {
      return res.status(404).send({ status: false, message: "Blog not found" });
    }

    let body = req.body;
    let files = req.files;
    
    if ("blogTitle" in body && body.blogTitle !== "") {
      blog.blogTitle = body.blogTitle;
    }

    if ("description" in body && body.description !== "") {
      blog.description = body.description;
    }

    if ("sections" in body && body.sections !== "") {
      blog.sections = body.sections;
    }

    if (files && files.length > 0) {
      if (!isValidImg(files[0].mimetype)) {
        return res.status(400).send({
          status: false,
          message: "Image Should be of JPEG/ JPG/ PNG",
        });
      }
      let updatedImgUrl = await imageMV(files.coverImg, 'blogImages');
      data.coverImg = updatedImgUrl;
    }

    if ("quote" in body && body.quote !== "") {
      blog.quote = body.quote;
    }

    if ("blogFooter" in body && body.blogFooter !== "") {
      blog.blogFooter = body.blogFooter;
    }

    if ("tags" in body && body.blogImage !== "") {
      blog.tags = body.tags;
    }

    await blog.save();

    res.status(200).send({
      status: true,
      message: "Blog updated successfully",
      updateData: blog,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// DELETE BLOG BY BLOG ID
const deleteBlogById = async (req, res) => {
  try {
    let blogId = req.params.blogId;

    if (!isValidObjectId(blogId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid blog id, please enter a valid blog id",
      });
    }

    let blog = await blogModel.findById(blogId);

    if (!blog) {
      return res.status(404).send({ status: false, message: 'No blog found with this blog id'})
    }

    // console.log( 'coverImg', blog.sections );

    const directory = 'public/uploads/blogImages';

    fs.readdir(directory, (err, files) => {
      if(err) {
        console.log(err);
      }

      let arr = [];

      for (let i=0; i<blog.sections.length; i++) {
        let str2 = blog.sections[i].imgUrl;
        arr.push(str2.slice(12));
      }

      for (let file of files) {
        let str1 = blog.coverImg.slice(12);
      
        let imgArr = [];
        if (str1 === file) {
          imgArr.push(str1);
        }

        let arr1 = [...imgArr, ...arr];
        
        if ( arr1.includes(file) ) {
          fs.unlink(path.join(directory, file), (err) => {
            if(err) {
              console.log(err);
            };
          })
        }
      }
    })

    let deleteBlog = await blogModel.deleteOne({
      _id: blogId,
      isPublished: true,
    });

    if (!deleteBlog) {
      return res
        .status(404)
        .send({ status: false, message: "Blog not found or already deleted" });
    }

    res
      .status(200)
      .send({ status: true, message: "Blog deleted successfully" });
  } catch (error) {
    return res.status(400).send({ status: false, message: error.message });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  getBlogByParams
};
