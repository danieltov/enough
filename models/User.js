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
  affirmations: {
    achievements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'achievement'
      }
    ],
    quotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quote'
      }
    ],
    gratitudes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gratitude'
      }
    ],
    strengths: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'strength'
      }
    ],
    count: {
      type: Number,
      required: true,
      default: 0
    }
  }
});
module.exports = User = mongoose.model('user', UserSchema, 'users');
