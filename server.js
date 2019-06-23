// * ==================== SERVER SETUP ==================== *//
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5001;

// * ==================== MIDDLEWARE ==================== *//
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
// * Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// * ==================== ROUTES ==================== *//
app.use(routes);

// * ==================== CONNECT DB ==================== *//
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost/${PORT}`)
);
