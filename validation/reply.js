const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReplyInput(data) {
  let errors = {};

  data.body = validText(data.title) ? data.title : "";
  data.username = validText(data.username) ? data.username : "";
  
  if (!Validator.isLength(data.body, { min: 3 })) {
    errors.body = "Reply needs to be at least 3 characters long"
  }

  if (Validator.isEmpty(data.body)) {
    errors.title = "Reply cannot be empty"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
