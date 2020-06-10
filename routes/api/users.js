const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateFireCalcs = require("../../validation/fire_calcs");

//private auth route
router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.json({id: req.user.id, username: req.user.username, email: req.user.email });
})

// register
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "Email already exists"
                return res.status(400).json(errors)
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, username: user.username }

                                jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});


// login
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username })
        .then(user => {
            if (!user) {
                errors.username = "This user does not exist";
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {id: user.id, username: user.username}

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            }
                        )
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(400).json(errors);
                    }
                });
        });
});


// update user fireNum/yearsToFI 
router.patch("/:userId", (req, res) => {
    let validatee;
    if (req.body.fireNum) validatee = req.body.fireNum
    if (req.body.yearsToFI) validatee = req.body.yearsToFI

    const { errors, isValid } = validateFireCalcs(validatee)

    if (!isValid) {
        return res.status(400).json(errors);
    }
    let objForUpdate = {};

    if (req.body.fireNum) objForUpdate.fireNum = req.body.fireNum;
    if (req.body.yearsToFI) objForUpdate.yearsToFI = req.body.yearsToFI;
    User.findOneAndUpdate(
        { _id: req.params.userId },
        objForUpdate,
        { new: true }
    )
    .then((userData) => { 
    
        return res.json(
            { 
                id: userData._id, 
                username: userData.username,
                email: userData.email, 
                fireNum: userData.fireNum, 
                yearsToFI: userData.yearsToFI 
            }
        );
    })
    .catch((errors) => res.json(errors));
});


// get user fire data
router.get(
  "/:userId",
    (req, res) => {
        User.findById( req.params.userId )
        .then((userData) => {
            return(
                res.json({ fireNum: userData.fireNum, yearsToFI: userData.yearsToFI })
            )
        })
    }
)

module.exports = router;
