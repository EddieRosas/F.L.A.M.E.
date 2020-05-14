const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: {unique:true},
        minlength: [3, 'Must be 3 or more characters']
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Must be 6 or more characters']
    },
    fireNum: {
        type: mongoose.Decimal128,
        default: null
    },
    yearsToFI: {
        type: mongoose.Decimal128,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema);