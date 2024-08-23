// server/models/UserCompletion.js
const mongoose = require('mongoose');

// Define the schema for user completion
const userCompletionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  watchedVideos: { type: [String], required: true },
  explanation: { type: String } // Optional field for explanation
});

// Create the UserCompletion model
const UserCompletion = mongoose.model('UserCompletion', userCompletionSchema);

module.exports = UserCompletion;

