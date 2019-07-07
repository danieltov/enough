// * ==================== DEPENDENCIES ==================== * //
const jwt = require('jsonwebtoken');
const config = require('dotenv').config();
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

// * ==================== MODEL ==================== * //
const User = require('../models/User');

// * ==================== EXPORTS ==================== * //

module.exports = {
  login: async function(req, res) {
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
  },
  verify: async function(req, res) {
    // * Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    // * Destructure req.body
    const { email, password } = req.body;

    try {
      // * See if user exists
      let user = await User.findOne({
        email
      });

      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid credentials'
            }
          ]
        });
      }

      // * Compare password
      const isMatched = await bcrypt.compare(password, user.password);

      if (!isMatched) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid credentials'
            }
          ]
        });
      }

      // * Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
};
