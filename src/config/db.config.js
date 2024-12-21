const mongoose = require("mongoose");
const { MONGODB_URI } = require("./server.config");

const connectToDB = async () => {
  const MAX_RETRIES = 5;
  const RETRY_DELAY = 2000; // 2 seconds

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const connectionInstance = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000, // 10 seconds timeout
      });
      console.log(
        `MongoDB connected! Host: ${connectionInstance.connection.host}`
      );
      return;
    } catch (error) {
      console.error(
        `Attempt ${attempt} - Error connecting to MongoDB:`,
        error.message
      );
      if (attempt < MAX_RETRIES) {
        console.log(`Retrying in ${RETRY_DELAY / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      } else {
        console.error("Max retries reached. Exiting...");
        process.exit(1);
      }
    }
  }
};

module.exports = connectToDB;
