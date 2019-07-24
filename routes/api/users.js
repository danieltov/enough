// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const router = express.Router();

// * ==================== MIDDLEWARE ==================== *//
const auth = require('../../middleware/auth');
const { body } = require('express-validator/check');

// * ==================== CONTROLLER ==================== *//
const controller = require('../../controllers/userController');

// * ==================== ROUTES ==================== *//

// * @route   POST api/users
// * @desc    Register user
// * @access  Public

router.post(
  '/',
  // * Validate request
  [
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
  ],
  controller.register
);

// * @route   POST api/users/mood
// * @desc    Record mood
// * @access  Public

router.post('/mood', auth, controller.mood);

module.exports = router;
