const likesModel = require("../models/likesModel");
const blogModel = require("../models/blogModel");
const visitorModel = require("../models/visitorModel");
const {
  isValid,
  isValidObjectId,
  isValidRequestBody,
} = require("../utils/utils");

// ADD LIKES
const addBlogLikesById = async (req, res) => {
  try {
    // let blogId = req.params.blogId;
    let data = req.body;

    let { blogId, visitorId, like, love, haha, wow, angry, fire } = data;

    let likes = await likesModel.findOne({ blogId: blogId, visitorId: visitorId });

    if (!likes) {
      let likeData = await likesModel.create(data);

      return res
        .status(201)
        .send({ status: true, message: "Likes added", data: likeData });
    } else if ("like" in data) {
      likes.like = likes.like + 1;
      likes.love = 0;
      likes.haha = 0;
      likes.wow = 0;
      likes.angry = 0;
      likes.fire = 0;
    
      if (likes.like > 1) {
        likes.like = 0;

        await likesModel.deleteOne({
          blogId: blogId, visitorId: visitorId
        })

        return res.status(200).send({ status: true, message: 'Like deleted from database'})
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "Like added", data: likes });

    } 
    
    // else if ("dislike" in data) {
    //   if (likes.like > 0) {
    //     likes.like = likes.like - 1;
    //   } else {
    //     likes.like = 0;
    //   }
    //   likes.dislike = likes.dislike + 1;

    //   await likes.save();

    //   return res
    //     .status(201)
    //     .send({ status: true, message: "Dislike added", data: likes });
    // } 
    
    else if ("love" in data) {
      likes.love = likes.love + 1;

      likes.like = 0;
      likes.haha = 0;
      likes.wow = 0;
      likes.angry = 0;
      likes.fire = 0;

      if (likes.love > 1) {
        likes.love = 0;

        await likesModel.deleteOne({
          blogId: blogId, visitorId: visitorId
        })

        return res.status(200).send({ status: true, message: 'Like deleted from database'})
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "love added", data: likes });
    } else if ("haha" in data) {
      likes.haha = likes.haha + 1;

      likes.love = 0;
      likes.like = 0;
      likes.wow = 0;
      likes.angry = 0;
      likes.fire = 0;

      if (likes.haha > 1) {
        likes.haha = 0;

        await likesModel.deleteOne({
          blogId: blogId, visitorId: visitorId
        })

        return res.status(200).send({ status: true, message: 'Like deleted from database'})
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "haha added", data: likes });
    } else if ("wow" in data) {
      likes.wow = likes.wow + 1;

      likes.love = 0;
      likes.haha = 0;
      likes.like = 0;
      likes.angry = 0;
      likes.fire = 0;

      if (likes.wow > 1) {
        likes.wow = 0;

        await likesModel.deleteOne({
          blogId: blogId, visitorId: visitorId
        })

        return res.status(200).send({ status: true, message: 'Like deleted from database'})
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "wow added", data: likes });
    } else if ("angry" in data) {
      likes.angry = likes.angry + 1;

      likes.love = 0;
      likes.haha = 0;
      likes.wow = 0;
      likes.like = 0;
      likes.fire = 0;

      if (likes.angry > 1) {
        likes.angry = 0;

        await likesModel.deleteOne({
          blogId: blogId, visitorId: visitorId
        })

        return res.status(200).send({ status: true, message: 'Like deleted from database'})
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "angry added", data: likes });
    } else if ("fire" in data) {
      likes.fire = likes.fire + 1;

      likes.love = 0;
      likes.haha = 0;
      likes.wow = 0;
      likes.angry = 0;
      likes.like = 0;

      if (likes.fire > 1) {
        likes.fire = 0;

        await likesModel.deleteOne({
          blogId: blogId, visitorId: visitorId
        })

        return res.status(200).send({ status: true, message: 'Like deleted from database'})
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "fire added", data: likes });
    } else {
        return res.status(400).send({ status: false, data: likes });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL lIKES
const getAllLikes = async (req, res) => {
  try {
    let blogId = req.params.id;
    let likes = await likesModel.find({ blogId: blogId });

    if (likes.length === 0) {
      return res.status(404).send({ status: false, message: "No likes found" });
    }

    return res.status(200).send({ status: true, likes: likes.length });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// INCREASE LIKES
const incBlogLikesById = async (req, res) => {
  try {
    // let likesId = req.params.id;
    let blogId = req.params.id;

    if (!isValidObjectId(blogId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid blog id, please enter a valid blog id",
      });
    }

    let visitorId = req.params.id;

    if (!isValidObjectId(visitorId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid visitor id, please enter a valid visitor id",
      });
    }

    // let blog = await blogModel.findOne({ _id: blogId });

    // if (!blog) {
    //   return res.status(404).send({ status: false, message: "Blog not found" });
    // }

    let body = req.body;

    if (!isValidRequestBody(body)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in request body" });
    }

    let likes = await likesModel.findOne({ blogId: blogId });

    // let { like, love, haha, wow, angry, fire } = body;

    if ("like" in body) {
      likes.like = likes.like + 1;
    }

    if ("love" in body) {
      likes.love = likes.love + 1;
    }

    if ("haha" in body) {
      likes.haha = likes.haha + 1;
    }

    if ("wow" in body) {
      likes.wow = likes.wow + 1;
    }

    if ("angry" in body) {
      likes.angry = likes.angry + 1;
    }

    if ("fire" in body) {
      likes.fire = likes.fire + 1;
    }

    await likes.save();

    return res
      .status(200)
      .send({ status: true, message: "Likes updated", data: likes });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};



// ADD LIKES
const addBlogLikes = async (req, res) => {
  try {
    // let blogId = req.params.blogId;
    let data = req.body;
    

    let { blogId, like, love, haha, wow, angry, fire } = data;

    let likes = await likesModel.findOne({ blogId: blogId, visitorId: visitorId });

    if (!likes.like) {

      likes.like = 1;
      let likeData = await likesModel.create(data);

      return res
        .status(201)
        .send({ status: true, message: "Likes added", data: likeData });
    } else if ("like" in data) {
      likes.like = likes.like + 1;

      if (likes.like > 1) {
        likes.like = 0
      }
      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "Like added", data: likes });
    } else if ("dislike" in data) {
      if (likes.like > 0) {
        likes.like = likes.like - 1;
      } else {
        likes.like = 0;
      }
      likes.dislike = likes.dislike + 1;

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "Dislike added", data: likes });
    } else if ("love" in data) {
      likes.love = likes.love + 1;

      if (likes.love > 1) {
        likes.love = 0;
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "love added", data: likes });
    } else if ("haha" in data) {
      likes.haha = likes.haha + 1;

      if (likes.haha > 1) {
        likes.haha = 0;
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "haha added", data: likes });
    } else if ("wow" in data) {
      likes.wow = likes.wow + 1;

      if (likes.wow > 1) {
        likes.wow = 0;
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "wow added", data: likes });
    } else if ("angry" in data) {
      likes.angry = likes.angry + 1;

      if (likes.angry > 1) {
        likes.angry = 0;
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "angry added", data: likes });
    } else if ("fire" in data) {
      likes.fire = likes.fire + 1;

      if (likes.fire > 1) {
        likes.fire = 0;
      }

      await likes.save();

      return res
        .status(201)
        .send({ status: true, message: "fire added", data: likes });
    } else {
      return res.status(400).send({ status: false, data: likes });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addBlogLikesById, incBlogLikesById, getAllLikes, addBlogLikes };
