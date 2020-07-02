const router = require("express").Router();

const productRouter = require("./modules/products");
const userRouter = require("./modules/users");

router.use("/products", productRouter);
router.use("/users", userRouter);

module.exports = router;
