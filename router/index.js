const router = require("express").Router();

const productRouter = require("./modules/products");

router.use("/products", productRouter);

module.exports = router;
