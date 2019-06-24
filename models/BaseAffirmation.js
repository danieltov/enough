const mongoose = require('mongoose');

const baseOptions = {
  discriminatorKey: 'affirmationType',
  collection: 'affirmations'
};

const BaseAffirmationSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'user'
    // },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    dateAdded: {
      type: Date,
      default: Date.now
    }
  },
  baseOptions
);

module.exports = Affirmation = mongoose.model(
  'affirmation',
  BaseAffirmationSchema
);
