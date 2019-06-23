const mongoose = require('mongoose');
const Affirmation = require('./BaseAffirmation');

const StrengthSchema = new mongoose.Schema({});

const Strength = Affirmation.discriminator('strength', StrengthSchema);

module.exports = mongoose.model('strength');
