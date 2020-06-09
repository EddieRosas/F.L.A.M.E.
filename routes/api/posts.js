const express = require('express');
const router = express.Router();
const passport = require('passport');

const Post = require('../../models/Post');
// const ValidatePost = require('../../validation/post');

router.get("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.all
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ noPostsFound: "No Posts were found :c" }))
  }
)

