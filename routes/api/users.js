const express = require('express');
const router = express.Router();

// * @route   GET api/users
// * @desc    Test route
// * @access  Public
router.get('/', (req, res) => res.send('Messages route'));

module.exports = router;
