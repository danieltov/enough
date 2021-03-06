// * ==================== CONFIG SETUP ==================== *//
const mongoose = require("mongoose");
const config = require("dotenv").config();
const db = process.env.MONGODB_URI;

// * ==================== CONFIG FUNCTION ==================== *//

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // * Mongoose settings
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(
      "==================== MongoDB Connected. ==================== "
    );
  } catch (err) {
    console.error(err.message);
    // * Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
