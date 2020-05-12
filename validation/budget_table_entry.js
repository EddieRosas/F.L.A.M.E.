const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBudgetTableInput(data) {
  let errors = {};

  data.amount = validText(data.amount) ? data.amount : "";
  data.incomeOrDebt = validText(data.incomeOrDebt) ? data.incomeOrDebt : "";

  if (!Validator.isLength(data.amount, { min: 1, max: 10 })) {
    errors.amount = "Amount must be between 1 and 1000000";
  }

  if (Validator.isEmpty(data.amount)) {
    errors.amount = "Amount can't be empty";
  }

  if (Validator.isBollean(data.incomeOrDebt)) {
    errors.incomeOrDebt = "Enter True or False";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description can't be empty";
  }

  if (!Validator.isLength(data.description, { min: 1, max: 200 })) {
    errors.description = "Description needs to between 1 and 200";
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
