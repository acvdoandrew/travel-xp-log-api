// controller dependencies
const express = require('express');

const app = express();
const Comment = require('../models/Comment');

// Index Route
app.get('/api/comments', async (req, res) => {
  try {
    res.status(200).json(await Comment.find({}));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// Create Route
app.post('/api/travel/:id/comments', async (req, res) => {
  try {
    res.status(201).json(await Comment.create(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// Delete Route
app.delete('/api/comments/:id', async (req, res) => {
  try {
    res.status(200).json(await Comment.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

// Update Route
app.put('/api/comments/:id', async (req, res) => {
  try {
    res.status(200).json(
      await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'bad request' });
  }
});

module.exports = app;