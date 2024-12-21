const ProjectController = require("../../controller/project.controller");
const express = require("express");

const projectRouter = express.Router();

projectRouter.post("/create", ProjectController.createProject);

projectRouter.get("/get/:id", ProjectController.getProjects);

module.exports = projectRouter;
