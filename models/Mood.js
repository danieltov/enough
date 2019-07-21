const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Mood = mongoose.model('mood', MoodSchema, 'moods');
