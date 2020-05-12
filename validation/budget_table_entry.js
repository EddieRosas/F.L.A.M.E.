const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBudgetTableInput(data) {
  let errors = {};

  data.amount = validText(data.amount) ? data.amount : "";
  data.incomeOrDebt = validText(data.incomeOrDebt) ? data.incomeOrDebt : "";

  if (!Validator.isFloat(data.amount, { min: 0.01 })) {
    errors.amount = "Please input valid amount (i.e: 1.99, 0.01, 100)";
  }

  if (Validator.isEmpty(data.amount)) {
    errors.amount = "Amount can't be empty";
  }

  if (!Validator.isBoolean(data.incomeOrDebt)) {
    errors.incomeOrDebt = "Please select Income or Expense/Debt";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description can't be empty";
  }

  if (!Validator.isLength(data.description, { min: 1, max: 200 })) {
    errors.description = "Description needs to be between 1 and 200 characters";
  }

  // if (!Validator.isDate(data.date)) {
  //   errors.date = "Please input a valid Data"
  // }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
