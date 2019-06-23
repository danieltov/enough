const mongoose = require('mongoose');
const Affirmation = require('./BaseAffirmation');

const GratitudeSchema = new mongoose.Schema({});

const Gratitude = Affirmation.discriminator('gratitude', GratitudeSchema);

module.exports = mongoose.model('gratitude');
