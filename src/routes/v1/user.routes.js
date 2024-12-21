const UserController = require("../../controller/user.controller");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/create", UserController.createUser);

userRouter.get("/get", UserController.getUsers);

module.exports = userRouter;
