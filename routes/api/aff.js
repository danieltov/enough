// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const router = express.Router();

// * ==================== MIDDLEWARE ==================== *//
const auth = require('../../middleware/auth');
const { body } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// * ==================== CONTROLLER ==================== *//
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

// * @route   DELETE api/aff/:id
// * @desc    Delete affirmation by id
// * @access  Private

router.delete('/achievement/:aff_id', auth, controller.deleteAchievement);
router.delete('/gratitude/:aff_id', auth, controller.deleteGratitude);
router.delete('/quote/:aff_id', auth, controller.deleteQuote);
router.delete('/strength/:aff_id', auth, controller.deleteStrength);

module.exports = router;
