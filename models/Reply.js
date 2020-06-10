const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts"
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Reply = mongoose.model("replies", ReplySchema);