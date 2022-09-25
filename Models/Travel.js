const mongoose = require('mongoose');

const { Schema } = mongoose;

const TravelSchema = new Schema(
  {
    id: { type: String, require: true },
    location: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    cost: { type: Number, require: true },
    visit: { type: String, require: true },
    dateCreated: { default: Date.now(), require: true },
    dateUpdated: { default: Date.now(), require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Travel', TravelSchema);
