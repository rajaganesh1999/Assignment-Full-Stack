// server/routes/users.js
const express = require('express');
const UserCompletion = require('../models/UserCompletion'); // Import the model
const router = express.Router();

// POST route to save user completion data
router.post('/saveCompletion', async (req, res) => {
  try {
    const { name, contact, watchedVideos, explanation } = req.body;
    
    // Create a new UserCompletion document
    const userCompletion = new UserCompletion({
      name,
      contact,
      watchedVideos,
      explanation
    });
    
    // Save the document to MongoDB
    await userCompletion.save();
    
    res.status(200).json({ message: 'User completion saved successfully' });
  } catch (err) {
    console.error('Error saving user completion:', err);
    res.status(500).json({ error: 'Failed to save user completion' });
  }
});

module.exports = router;


