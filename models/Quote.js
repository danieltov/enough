const mongoose = require('mongoose');
const Affirmation = require('./BaseAffirmation');

const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: false,
    default: 'Unknown Author'
  }
});

const Quote = Affirmation.discriminator('quote', QuoteSchema);

module.exports = mongoose.model('quote');
