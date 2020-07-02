const User = require("../models/User");
const Transaction = require("../models/Transaction");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

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

/**
 * @description Get all user transactions
 * @route       GET /api/users/:id/transactions
 */
exports.userTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.params.id },
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Cart, include: [{ model: Product }] }
      ]
    });

    res.json(transactions);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
