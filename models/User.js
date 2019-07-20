const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  affirmations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'achievements'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'favoriteQuotes'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'gratitudes'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'strengths'
    }
  ],
  moods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'mood'
    }
  ]
});
module.exports = User = mongoose.model('user', UserSchema, 'users');
