const mongoose = require("mongoose");
const { MONGODB_URI } = require("./server.config");

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 10,
    });
    console.log(
      `\nMongoDB connected successfully! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

module.exports = connectToDB;
