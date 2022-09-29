const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    userName: { type: String, required: true },
    userId: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'Travel' },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
