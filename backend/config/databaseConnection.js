const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //Exit from the process
  }
};

module.exports = connectDB;
