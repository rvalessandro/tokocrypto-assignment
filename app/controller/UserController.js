const User = require("../models/User");

/**
 * @description Get all users
 * @route       GET /api/users
 */
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: ["id", "name", "email"] });
    res.json(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
