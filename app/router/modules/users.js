const router = require("express").Router();

const {
  getUsers,
  userTransactions
} = require("../../controller/UserController");

router.route("/").get(getUsers);
router.route("/:id/transactions").get(userTransactions);

module.exports = router;
