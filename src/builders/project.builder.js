const ProjectModel = require("../models/project.model");
const logger = require("../config/logger.config");

class ProjectBuilder {
  constructor() {
    this.project = {};
  }

  setTitle(title) {
    this.project.title = title;
    return this;
  }

  setDescription(description) {
    this.project.description = description;
    return this;
  }

  setAssignedTo(userId) {
    this.project.assignedTo = userId;
    return this;
  }

  setStatus(status = "Pending") {
    this.project.status = status;
    return this;
  }

  async save() {
    try {
      const project = new ProjectModel(this.project);
      await project.save();
      logger.info(`Project created: ${project.title}`);
      return project;
    } catch (error) {
      logger.error(`Error saving project: ${error.message}`);
      throw error;
    }
  }
}

module.exports = ProjectBuilder;
