const express = require("express");
const projectRouter = require("./project.routes.js");
const userRouter = require("./user.routes.js");
const v1Router = express.Router();

v1Router.use("/project", projectRouter);
v1Router.use("/user", userRouter);

module.exports = v1Router;
