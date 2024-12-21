const mongoose = require("mongoose");
const { MONGODB_URI } = require("./server.config");

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGODB_URI}`);
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
