// controller dependencies
const express = require('express');

const app = express();
// eslint-disable-next-line import/no-unresolved, import/extensions, node/no-missing-require
const Travel = require('../models/Travel');

require('dotenv').config();

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to Travel XP.Log');
});

// Index Route
app.get('/api/travel', async (req, res) => {
  try {
    res.status(200).json(await Travel.find({}));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// New Route

// Delete Route
app.delete('/api/travel/:id', async (req, res) => {
  try {
    res.status(200).json(await Travel.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// Update Route
app.put('/api/travel/:id', async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// Create Route
app.post('/api/travel', async (req, res) => {
  try {
    res.status(201).json(await Travel.create(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// eslint-disable-next-line no-undef
module.exports = travel;
