// * ==================== DEPENDENCIES ==================== *//
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('dotenv').config();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check'); // ! use express-validate to handle validation and responses
const auth = require('../../middleware/auth');

// * ==================== MODEL ==================== * //
const User = require('../../models/User');

// * ==================== ROUTES ==================== *//

// * @route   GET api/auth
// * @desc    Login Route checks token & gets user
// * @access  Private

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate([
        'affirmations.strengths',
        'affirmations.achievements',
        'affirmations.quotes',
        'affirmations.gratitudes'
      ])
      .select('-password'); // select method '-password' leaves off password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

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
  async (req, res) => {
    // ! express-validate error catching START
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ! express-validate error catching END

    const { email, password } = req.body;

    try {
      // * See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // * Compare password
      const isMatched = await bcrypt.compare(password, user.password);

      if (!isMatched) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

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
