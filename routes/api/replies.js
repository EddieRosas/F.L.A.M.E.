const express = require("express");
const router = express.Router();
const passport = require("passport");

const Reply = require("../../models/Reply");
// const validateReplyInput = require("../../validation/reply");

//protected route landing page (entries index)
router.get("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Reply.find({ postId: req.post.id })
            .sort({ date: -1 })
            .then(replies => res.json(replies))
            .catch(err => res.status(404).json({ noEntriesFound: "No replies found" })
            )
    }
)