const express = require('express');
const router = express.Router();
const passport = require('passport');

const Reply = require('../../models/Reply');
const validateReplyInput = require('../../validation/reply');

router.get("/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reply.find({ postId: req.params.postId })
      .sort({ date: -1 })
      .then(replies => res.json(replies))
      .catch(err => res.status(404).json({ noReplies: "This post has no replies :c" }))
  }
)

router.post("/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateReplyInput(req.body)

    // if(!isValid) {
    //   return res.status(422).json(errors)
    // }

    const newReply = new Reply({
      postId: req.params.postId,
      body: req.body.body,
      username: req.user.username,
      date: req.body.date,
    });

    newReply.save().then(reply => res.json(reply));
  }
)

router.patch("/:replyId", (req, res) => {
  // const { errors, isValid } = validateReplyInput(req.body)

  // if (!isValid) {
  //   return res.status(422).json(errors)
  // }

  Reply.findOneAndUpdate(
    { _id: req.params.replyId },
    {
      body: req.body.body,
    },
    { new: true }
  ).then(reply => {
    return res.json(reply)
  }).catch(err => {
    res.json(err)
  });
})

router.delete("/:replyId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reply.findByIdAndDelete(req.params.replyId)
      .then(reply => res.json(reply.id))
      .catch(err => res.status(404).json({ noReplyFound: "Reply does not exist" }));
  }
)

router.put(
  "/like",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reply.findByIdAndUpdate(
      req.body.replyId,
      {
        $push: { likes: req.user.id },
      },
      { new: true }
    )
      .then((reply) => {
        return res.json(reply);
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

router.put(
  "/unlike",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Reply.findByIdAndUpdate(
      req.body.replyId,
      {
        $pull: { likes: req.user.id },
      },
      { new: true }
    )
      .then((reply) => {
        return res.json(reply);
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

module.exports = router;
