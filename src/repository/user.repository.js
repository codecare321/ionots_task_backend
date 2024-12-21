const UserModel = require("../models/user.model");

class UserRepository {
  async createUser(userData) {
    const user = new UserModel(userData);
    return await user.save();
  }

  async getUsers() {
    return await UserModel.find();
  }
}

module.exports = new UserRepository();
