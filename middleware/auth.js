// * ==================== DEPENDENCIES ==================== *//
const jwt = require('jsonwebtoken');
const config = require('dotenv').config();

// * ==================== FUNCTION ==================== *//

const auth = async (req, res, next) => {
  // * Get token from header
  const token = req.header('x-auth-token');

  // * Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // * Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = auth;
