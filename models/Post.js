const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true,
    minlength: [3, 'Make longer dammit'],
    maxlength: [75, 'Too long make short']
  },
  description: {
    type: String,
    required: true,
    minlength: [1, 'Say more']
  },
  postType: {
    type: Number,
    required: true,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('Post', PostSchema);