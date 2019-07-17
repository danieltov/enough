// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const { check } = require('express-validator/check');
const router = express.Router();
const auth = require('../../middleware/auth');
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
  [
    // ! express-validate functions to validate request body START
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Password is required').exists()
    // ! express-validate functions to validate request body END
  ],
  controller.verify
);

module.exports = router;
