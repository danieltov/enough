const mongoose = require('mongoose');

const baseOptions = {
  discriminatorKey: 'affirmationType',
  collection: 'affirmations'
};

const BaseAffirmationSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
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
