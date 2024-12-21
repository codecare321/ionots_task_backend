const ProjectModel = require("../models/project.model");

class ProjectRepository {
  async findProjectsByUser(userId) {
    try {
      return await ProjectModel.find({ assignedTo: userId });
    } catch (err) {
      logger.error(`Error fetching projects: ${err.message}`);
      throw err;
    }
  }

  async updateProjectStatus(projectId, status) {
    try {
      return await ProjectModel.findByIdAndUpdate(
        projectId,
        { status },
        { new: true }
      );
    } catch (err) {
      logger.error(`Error updating project status: ${err.message}`);
      throw err;
    }
  }
}

module.exports = new ProjectRepository();
