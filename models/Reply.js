const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
  },
  body: {
    type: String,
    required: true,
    minlength: [3, "Make longer dammit"],
  },
  username: {
    type: String,
    required: true,
  },
  likes: [
      { type: Schema.Types.ObjectId, ref: "users" }
  ],
  date: {
    type: Date,
    default: new Date().toISOString(),
  },
});

module.exports = Reply = mongoose.model('Reply', ReplySchema);
