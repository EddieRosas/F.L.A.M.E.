const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFireCalcs(data) {
    let errors = {};

    data.fireNum = validText(data) ? data : "";
    data.yearsToFI = validText(data) ? data.yearsToFI : "";

    if (!Validator.isFloat(data, { min: 0.01 })) {
        errors.fireNum = "Ensure calculated fire number is valid (i.e: 880000.00, 757023.25)";
    }

    if (!Validator.isFloat(data, { min: 0.01 })) {
        errors.yearsToFI = "Ensure calculated years to FIRE fire is valid (i.e: 25.5, 32.0)";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};