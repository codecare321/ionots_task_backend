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

const corsConfig = {
  origin: "",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));
app.options("", cors(corsConfig));

app.use("/api", projectRoutes);

app.listen(PORT, async () => {
  logger.info(`Server is listening on port ${PORT}`);
  await connectToDB();
});
