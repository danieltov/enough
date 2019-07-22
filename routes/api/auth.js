// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const router = express.Router();

// * ==================== MIDDLEWARE ==================== *//
const auth = require('../../middleware/auth');
const { check } = require('express-validator/check');

// * ==================== CONTROLLER ==================== *//
const controller = require('../../controllers/authController');

// * ==================== ROUTES ==================== *//

// * @route   GET api/auth
// * @desc    Login Route checks token & gets user
// * @access  Private

router.get('/', auth, controller.login);

// * @route   POST api/auth
// * @desc    Authenticate user & get token
// * @access  Public
router.post(
  '/',
  // * Validate request
  [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Password is required').exists()
  ],
  controller.verify
);

module.exports = router;
