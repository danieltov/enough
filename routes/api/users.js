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

// * @route   POST api/users/aff
// * @desc    Create new quote, gratitude, strength affirmations on user
// * @access  Private

router.post(
  '/',
  [
    auth,
    [
      // ! express-validate functions to validate request body START
      body('text', 'Text is required')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      body('affirmationType', 'An Affirmation Type is required')
        .not()
        .isEmpty()
      // ! express-validate functions to validate request body END
    ]
  ],
  async (req, res) => {
    // ! express-validate error catching START
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    // ! express-validate error catching END

    // * Destructure req.body
    const { text, image, dateAdded, author, affirmationType } = req.body;

    // * Build affirmation object
    const affirmationFields = {};
    affirmationFields.user = req.user;
    affirmationFields.text = text;
    affirmationFields.affirmationType = affirmationType;
    if (image) affirmationFields.image = image;
    if (dateAdded) affirmationFields.dateAdded = dateAdded;
    if (author) affirmationFields.author = author;

    // * Add affirmationFields to corresponding model
    try {
      if (affirmationFields.affirmationType === 'gratitude') {
        const user = await DB.Gratitude.findOneAndUpdate(
          { user: req.user.id },
          { $set: affirmationFields },
          { new: true }
        );
        return res.json(user);
      } else if (affirmationFields.affirmationType === 'quote') {
        const user = await DB.Quote.findOneAndUpdate(
          { user: req.user.id },
          { $set: affirmationFields },
          { new: true }
        );
        return res.json(user);
      } else {
        const user = await DB.Strength.findOneAndUpdate(
          { user: req.user.id },
          { $set: affirmationFields },
          { new: true }
        );
        return res.json(user);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// * @route   POST api/users/aff/achievement
// * @desc    Create new achievements on user
// * @access  Private

router.post(
  '/',
  [
    auth,
    [
      // ! express-validate functions to validate request body START
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
      // ! express-validate functions to validate request body END
    ]
  ],
  async (req, res) => {
    // ! express-validate error catching START
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    // ! express-validate error catching END

    // * Destructure req.body
    const {
      text,
      image,
      dateAdded,
      affirmationType,
      title,
      dateAchieved,
      madeMeFeel
    } = req.body;

    // * Build affirmation object
    const affirmationFields = {};
    affirmationFields.user = req.user;
    affirmationFields.text = text;
    affirmationFields.affirmationType = affirmationType;
    affirmationFields.dateAdded = dateAdded;
    affirmationFields.title = title;
    affirmationFields.dateAchieved = dateAchieved;
    affirmationFields.madeMeFeel = madeMeFeel;
    if (image) affirmationFields.image = image;

    // * Add affirmationFields to model
    try {
      // * make sure dateAchieved isn't null
      if (affirmationFields.dateAchieved === null) {
        return res.status(400).json({
          msg: 'Accomplishment Achieved Date is inavlid'
        });
      }

      const user = await DB.Achievement.findOneAndUpdate(
        { user: req.user.id },
        { $set: affirmationFields },
        { new: true }
      );
      return res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
