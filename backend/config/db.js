const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://soban312004:EmXtzsaYzeockMjr@cluster0.yy25m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    if (connection) {
      console.log("connected with database");
    } else {
      console.log("Failed to connect with database");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
