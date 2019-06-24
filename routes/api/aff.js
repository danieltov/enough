// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const config = require('dotenv').config();
const { body } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const router = express.Router();
const auth = require('../../middleware/auth');
const controller = require('../../controllers/affController');

// * ==================== ROUTES ==================== *//

// * @route   POST api/aff
// * @desc    Create new quote, gratitude, strength affirmations on user
// * @access  Private

router.post(
  '/',
  [
    auth,
    // * Validate request
    [
      body('text', 'Text is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      body('affirmationType', 'An Affirmation Type is required')
        .not()
        .isEmpty()
    ]
  ],
  controller.newAff
);

// * @route   POST api/aff/achievement
// * @desc    Create new achievements on user
// * @access  Private

router.post(
  '/achievement',
  [
    auth,
    // * Validate request
    [
      body('text', 'Text is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      body('affirmationType', 'An Affirmation Type is required')
        .not()
        .isEmpty(),
      body('title', 'A title is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      body('dateAchieved', 'A valid date is required')
        .not()
        .isEmpty(),
      sanitizeBody('dateAchieved').toDate(),
      body(
        'madeMeFeel',
        'A short sentence of how this achievement made you feel is required'
      )
        .not()
        .isEmpty()
        .trim()
        .escape()
    ]
  ],
  controller.achievment
);

module.exports = router;
