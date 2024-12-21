const ProjectBuilder = require("../builders/project.builder");
const ProjectRepository = require("../repository/project.repository");
const logger = require("../config/logger.config");

class ProjectService {
  async createProject(data) {
    const builder = new ProjectBuilder()
      .setTitle(data.title)
      .setDescription(data.description)
      .setAssignedTo(data.assignedTo);

    return await builder.save();
  }

  async getProjects(userId) {
    return await ProjectRepository.findProjectsByUser(userId);
  }

  async updateStatus(projectId, status) {
    return await ProjectRepository.updateProjectStatus(projectId, status);
  }
}

module.exports = new ProjectService();
