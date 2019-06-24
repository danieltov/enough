// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const config = require('dotenv').config();
const { validationResult, body } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DB = require('../../models');
const auth = require('../../middleware/auth');

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
  async (req, res) => {
    // ! express-validate error catching START
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ! express-validate error catching END

    const { name, email, password } = req.body;

    try {
      // * See if user exists
      let user = await DB.User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // * Create an instance of the user
      user = new DB.User({ name, email, password });

      // * Encrypt password with bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // * Save user to database
      await user.save();

      // * Return jsonwebtoken
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
