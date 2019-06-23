const mongoose = require('mongoose');
const Affirmation = require('./BaseAffirmation');

const AchievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  dateAchieved: {
    type: Date,
    required: true
  },
  madeMeFeel: {
    type: String,
    required: true
  }
});

const Achievement = Affirmation.discriminator('achievement', AchievementSchema);

module.exports = mongoose.model('achievement');
