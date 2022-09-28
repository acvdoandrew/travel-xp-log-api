const mongoose = require('mongoose');

const { Schema } = mongoose;

const TravelSchema = new Schema(
  {
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    cost: { type: String, required: true },
    visit: { type: String, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Travel', TravelSchema);
