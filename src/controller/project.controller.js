const ProjectService = require("../services/project.service");
const logger = require("../config/logger.config");

const { StatusCodes } = require("http-status-codes");

class ProjectController {
  async createProject(req, res) {
    try {
      const project = await ProjectService.createProject(req.body);
      console.log(project);

      res.status(StatusCodes.CREATED).json({ success: true, project });
    } catch (error) {
      logger.error(`Error creating project: ${error.message}`);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async getProjects(req, res) {
    try {
      const projects = await ProjectService.getProjects(req.params.id);
      console.log(projects);

      res.status(StatusCodes.OK).json({ success: true, projects });
    } catch (error) {
      logger.error(`Error fetching projects: ${error.message}`);
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new ProjectController();
