const router = require("express").Router();

const productRouter = require("./modules/products");
const userRouter = require("./modules/users");
const transactionRouter = require("./modules/transactions");

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/transactions", transactionRouter);

module.exports = router;
