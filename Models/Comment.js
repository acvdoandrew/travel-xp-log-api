const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    id: { type: String, require: true },
    comment: { type: String, require: true },
    dateCreated: { default: Date.now(), require: true },
    dateUpdated: { default: Date.now(), require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
