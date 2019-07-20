// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { body } = require('express-validator/check');
const controller = require('../../controllers/userController');

// * ==================== ROUTES ==================== *//

// * @route   POST api/users
// * @desc    Register user
// * @access  Public

router.post(
  '/',
  [
    // ! express-validate functions to validate request body START
    body('name', 'Please enter a name to call you by')
      .not()
      .isEmpty()
      .trim()
      .escape(),
    body('email', 'Please enter a valid email address')
      .isEmail()
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 })
    // ! express-validate functions to validate request body END
  ],
  controller.register
);

// * @route   POST api/users/mood
// * @desc    Record mood
// * @access  Public

router.post('/mood', auth, controller.mood);

module.exports = router;
