// * ==================== DEPENDENCIES ==================== *//
const path = require('path');
const router = require('express').Router();

// * ==================== DEFINE ROUTES ==================== *//
router.use('/api/users', require('./api/users'));
router.use('/api/auth', require('./api/auth'));
router.use('/api/aff', require('./api/aff'));
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
