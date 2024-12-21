const mongoose = require("mongoose");
const { MONGODB_URI } = require("./server.config");

const connectToDB = async () => {
  const connectionInstance = await mongoose.connect(`${MONGODB_URI}`);
  console.log(
    `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
  );
};

module.exports = connectToDB;
