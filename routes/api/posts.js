const express = require('express');
const router = express.Router();
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/post');

router.get("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ noPostsFound: "No posts were found :c" }))
  }
)

router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if(!isValid) {
      return res.status(422).json(errors);
    }
    
    const newPost = new Post({
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      postType: req.body.postType,
      date: req.body.date,
    });

    newPost.save().then(post => res.json(post));
  }
)

router.patch("/:postId", (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }
  
  Post.findOneAndUpdate(
    { _id: req.params.postId },
    {
      title: req.body.title,
      description: req.body.description,
      postType: req.body.postType,
      date: req.body.date,
    },
    { new: true }
  ).then(post => {
    return res.json(post)
  }).catch(err => {
    res.json(err)
  });
});

router.delete("/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findByIdAndDelete(req.params.postId)
      .then(post => res.json(post.id))
      .catch(err => res.status(404).json({ noPostFound: "Post not found :c" }));
  }
)

router.put("/like", passport.authenticate("jwt", { session: false }),
(req, res) => {
  debugger
  Post.findByIdAndUpdate(req.body.postId,
    {
      $push: {likes: req.user.id}
    }, 
    { new: true }
  ).then(post => {
    return res.json(post)
  }).catch(err => {
    res.json(err)
  });
});

router.put("/unlike", passport.authenticate("jwt", { session: false }),
(req, res) => {
  Post.findByIdAndUpdate(req.body.postId,
    {
      $pull: {likes: req.user.id}
    }, 
    { new: true }
  ).then(post => {
    return res.json(post)
  }).catch(err => {
    res.json(err)
  });
});

module.exports = router;