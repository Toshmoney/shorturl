require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI
const connectDB = async (msg) => {
 await mongoose.connect(connectionString);
  return console.log(msg);
};
module.exports = connectDB;
