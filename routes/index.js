const path = require('path');
const router = require('express').Router();

// * API Routes
router.use('/api/users', require('./api/users'));
router.use('/api/auth', require('./api/auth'));
router.use('/api/aff', require('./api/aff'));

// * Test
router.get('/', (req, res) => res.send('API Running'));

// If no API routes are hit, send the React app
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = router;
