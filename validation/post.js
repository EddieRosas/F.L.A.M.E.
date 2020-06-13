const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  
  if (!Validator.isNumeric(data.postType)) {
    errors.postType = "Please choose either Question or Story"
  }

  if (Validator.isEmpty(data.postType)) {
    errors.postType = "Must choose a type"
  }
  
  if (!Validator.isLength(data.title, { min: 3, max: 75 })) {
    errors.title = "Title needs to be between 3 and 75 characters"
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title cannot be empty"
  }
  
  if (!Validator.isLength(data.description, { min: 1 })) {
    errors.description = "Description needs to be at least 3 characters"
  }
  
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description cannot be empty"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
