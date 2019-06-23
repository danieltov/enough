const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// * API Routes
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
