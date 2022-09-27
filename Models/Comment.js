const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: 'Travel' },
    comment: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
