// * ==================== CONFIG SETUP ==================== *//
const mongoose = require('mongoose');
const config = require('dotenv').config();
const db =
  process.env.MONGODB_URI ||
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@ds241977.mlab.com:41977/heroku_z516dgj7`;

// * ==================== CONFIG FUNCTION ==================== *//

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // * Mongoose settings
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected.');
  } catch (err) {
    console.error(err.message);
    // * Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
