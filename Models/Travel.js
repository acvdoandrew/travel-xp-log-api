const mongoose = require('mongoose');

const { Schema } = mongoose;

const TravelSchema = new Schema(
  {
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    cost: { type: Number, required: true },
    visit: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Travel', TravelSchema);
