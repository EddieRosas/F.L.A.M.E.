const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");

const BudgetTableEntry = require("../../models/BudgetTableEntry");
const validateEntryInput = require("../../validation/budget_table_entry");


//protected route landing page (entries index)
router.get("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        BudgetTableEntry.find({userId: req.user.id})
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
        const { errors, isValid } = validateEntryInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newEntry = new BudgetTableEntry({
          userId: req.user.id,
          amount: req.body.amount,
          incomeOrDebt: req.body.incomeOrDebt,
          description: req.body.description,
          category: req.body.category,
          date: req.body.date === "" ? new Date(): req.body.date,
        });

        newEntry.save().then(entry => res.json(entry));
    }
);

router.patch("/:entryId", (req, res) => {

  debugger;
  const { errors, isValid } = validateEntryInput(req.body);

  if (!isValid) {
    debugger;
    return res.status(400).json(errors);
  }

  BudgetTableEntry.findOneAndUpdate(
    { _id: req.params.entryId },
    {
      amount: req.body.amount,
      incomeOrDebt: req.body.incomeOrDebt,
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    { new: true }
  )
  .then((entry) => {
    debugger;
    return res.json(entry);
  })
  .catch((errors) => {
    res.json(errors)
  });
});

// protected route to delete entries
router.delete("/:entryId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       BudgetTableEntry.findByIdAndDelete(req.params.entryId)
         .then(entry => res.json(entry.id))
         .catch(err => res.status(404).json({ noEntryFound: "Entry not found"})
         );
    }
)


module.exports = router;