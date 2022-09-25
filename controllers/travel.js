// controller dependencies
const express = require('express');

const router = express.Router();
const Travel = require('../models/travel');

require('dotenv').config();

// Root Route
router.get('/', (req, res) => {
  res.send('Welcome to Travel XP.Log');
});

// Index Route
router.get('/api/travel', async (req, res) => {
  try {
    res.status(200).json(await Travel.find({}));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// New Route

// Delete Route
router.delete('/api/travel/:id', async (req, res) => {
  try {
    res.status(200).json(await Travel.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// Update Route
router.put('/api/travel/:id', async (req, res) => {
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
// Create
router.post('/api/travel', async (req, res) => {
  try {
    res.status(201).json(await Travel.create(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

module.exports = router;
