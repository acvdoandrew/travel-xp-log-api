const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
