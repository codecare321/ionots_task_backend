const UserService = require("../services/user.service");
const { StatusCodes } = require("http-status-codes");
class UserController {
  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(StatusCodes.CREATED).json({ success: true, user });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: error.message });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await UserService.getUsers();
      res.status(StatusCodes.OK).json({ success: true, users });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: error.message });
    }
  }
}

module.exports = new UserController();
