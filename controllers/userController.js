// * ==================== DEPENDENCIES ==================== *//
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');

// * ==================== MODELS ==================== *//
const User = require('../models/User');
const Mood = require('../models/Mood');

module.exports = {
  register: async function(req, res) {
    // ! express-validate error catching START
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    // ! express-validate error catching END

    const { name, email, password } = req.body;

    try {
      // * See if user exists
      let user = await User.findOne({
        email
      });

      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'User already exists'
            }
          ]
        });
      }

      // * Create an instance of the user
      user = new User({
        name,
        email,
        password
      });

      // * Encrypt password with bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // * Save user to database
      await user.save();

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
          expiresIn: 3600
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
  },
  mood: async function(req, res) {
    const { value } = req.body;

    const moodFields = { user: req.user.id, value };

    try {
      const mood = new Mood(moodFields);
      await mood.save();
      const user = await DB.User.findOneAndUpdate(
        {
          _id: moodFields.user
        },
        {
          $push: {
            moods: mood._id
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
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};
