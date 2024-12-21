const UserRepository = require("../repository/user.repository");

class UserService {
  async createUser(userData) {
    return await UserRepository.createUser(userData);
  }

  async getUsers() {
    return await UserRepository.getUsers();
  }
}

module.exports = new UserService();
