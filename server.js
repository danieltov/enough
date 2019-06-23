// * Set up Express
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// * Connect Database
connectDB();

// * Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost/${PORT}`)
);
