// * ==================== SERVER SETUP ==================== *//
const express = require('express');
const logger = require('morgan');
const connectDB = require('./config/db');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5001;

// * ==================== MIDDLEWARE ==================== *//
app.use(logger('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// * ==================== SERVE ASSETS ==================== *//
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// * ==================== ROUTES ==================== *//
app.use(routes);

// * ==================== CONNECT DB ==================== *//
connectDB();

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
