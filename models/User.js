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
      ref: 'achievement'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'quote'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'gratitude'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'strength'
    }
  ],
  favoriteAnimal: {
    type: String,
    required: false
  }
});
module.exports = User = mongoose.model('user', UserSchema, 'users');
