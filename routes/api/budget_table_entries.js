const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");

const BudgetTableEntry = require("../../models/BudgetTableEntry");
// const validateEntryInput 


//protected route landing page (entries index)
router.get("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        BudgetTableEntry.find({user: req.params.user_id})
            .sort({date: -1})
            .then(entries => res.json(entries))
            .catch(err => res.status(404).json({ noEntriesFound: "No entries found"})
        )
    }
)

// protected route to post entries
router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        // const { errors, isValid } = validateEntryInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        const newEntry = new BudgetTableEntry({
            userId: req.user.id,
            amount: req.body.amount,
            incomeOrDebt: req.body.incomeOrDebt,
            description: req.body.description,
            category: req.body.category,
            // data: Date.now // not sure if this is needed or if model will for sure default
        });

        newEntry.save().then(entry => res.json(entry));
    }
);

module.exports = router;