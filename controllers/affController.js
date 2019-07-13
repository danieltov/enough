// * ==================== DEPENDENCIES ==================== *//
const { validationResult } = require('express-validator/check');

// * ==================== MODELS ==================== *//
const DB = require('../models');

// * ==================== EXPORTS ==================== *//
module.exports = {
  newAff: async function(req, res) {
    // * Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    // * Destructure req.body
    const { text, dateAdded, author, affirmationType } = req.body;

    // * Build affirmation object
    const affirmationFields = {};
    affirmationFields.user = req.user.id;
    affirmationFields.text = text;
    affirmationFields.affirmationType = affirmationType;
    if (dateAdded) affirmationFields.dateAdded = dateAdded;
    if (author) affirmationFields.author = author;

    // * Add affirmationFields to corresponding model
    try {
      if (affirmationFields.affirmationType === 'gratitude') {
        const gratitude = new DB.Gratitude(affirmationFields);
        await gratitude.save();
        const user = await DB.User.findOneAndUpdate(
          {
            _id: affirmationFields.user
          },
          {
            $push: {
              'affirmations.gratitudes': gratitude._id
            }
          },
          {
            new: true
          }
        );
        return res.json({
          gratitude,
          user
        });
      } else if (affirmationFields.affirmationType === 'quote') {
        const quote = new DB.Quote(affirmationFields);
        await quote.save();
        const user = await DB.User.findOneAndUpdate(
          {
            _id: affirmationFields.user
          },
          {
            $push: {
              'affirmations.quotes': quote._id
            }
          },
          {
            new: true
          }
        );
        return res.json({
          quote,
          user
        });
      } else {
        const strength = new DB.Strength(affirmationFields);
        await strength.save();
        const user = await DB.User.findOneAndUpdate(
          { _id: affirmationFields.user },
          { $push: { 'affirmations.strengths': strength._id } },
          { new: true }
        );
        return res.json({
          strength,
          user
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
  achievment: async function(req, res) {
    // ! express-validate error catching START
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    // ! express-validate error catching END

    // * Destructure req.body
    const {
      text,
      dateAdded,
      affirmationType,
      title,
      dateAchieved,
      madeMeFeel
    } = req.body;

    // * Build affirmation object
    const affirmationFields = {};
    affirmationFields.user = req.user.id;
    affirmationFields.text = text;
    affirmationFields.affirmationType = affirmationType;
    affirmationFields.dateAdded = dateAdded;
    affirmationFields.title = title;
    affirmationFields.dateAchieved = dateAchieved;
    affirmationFields.madeMeFeel = madeMeFeel;

    // * Add affirmationFields to model
    try {
      // * make sure dateAchieved isn't null
      if (affirmationFields.dateAchieved === null) {
        return res.status(400).json({
          msg: 'Accomplishment Achieved Date is inavlid'
        });
      }

      const achievement = new DB.Achievement(affirmationFields);
      await achievement.save();
      const user = await DB.User.findOneAndUpdate(
        {
          _id: affirmationFields.user
        },
        {
          $push: {
            'affirmations.achievements': achievement._id
          }
        },
        {
          new: true
        }
      );
      return res.json({
        achievement,
        user
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};
