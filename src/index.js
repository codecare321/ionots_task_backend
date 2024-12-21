"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const connectToDB = require("./config/db.config");
const projectRoutes = require("./routes/index");
const logger = require("./config/logger.config");
const { PORT } = require("./config/server.config");
const cors = require("cors");
const app = express();

//middleswares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.get("/", (req, res) => {
  console.log("Simplified API response");
  res.status(200).json({ message: "API is working" });
});
app.use("/api", projectRoutes);

app.listen(PORT, async () => {
  logger.info(`Server is listening on port ${PORT}`);
  await connectToDB();
});
