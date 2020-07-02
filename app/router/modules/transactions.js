const router = require("express").Router();

const {
  getTransactions,
  createTransaction
} = require("../../controller/TransactionController");

router.route("/").get(getTransactions).post(createTransaction);

module.exports = router;
