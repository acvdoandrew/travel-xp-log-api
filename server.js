// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const travelRouter = require('./controllers/travel');

// Initialize express app
const app = express();
// Configure application settings
require('dotenv').config();

const { PORT = 4000, DATABASE_URL } = process.env;
// connect to mongodb
mongoose.connect(DATABASE_URL);

// const Travel = mongoose.model('Travel', travelSchema);

mongoose.connection
  .on('connected', () => console.log('Connected to MongoDB'))
  .on('disconnected', () => console.log('Disconnected from MongoDB'))
  .on('error', (error) => console.log('Problem with MongoDB: ', error));

// mount middleware
app.use(express.json());
// this middleware intercepts incoming json request bodies and turns them into req.body
app.use(logger('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Travel XP.Log');
});

app.use(travelRouter);

// mount router/controller

// App Listen
app.listen(PORT, () => {
  console.log(`Express is listenting on port:${PORT}`);
});
