const router = require("express").Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../../controller/ProductController");

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
