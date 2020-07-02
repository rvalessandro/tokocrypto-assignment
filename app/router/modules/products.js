const router = require("express").Router();

const { getProducts } = require("../../controller/ProductController");

router.route("/").get(getProducts);

module.exports = router;
