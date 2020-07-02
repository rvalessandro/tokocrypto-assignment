const Product = require("../models/Product");

/**
 * @description Get all products
 * @route       GET /api/products
 */
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

/**
 * @description Create product
 * @route       POST /api/products
 */
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

/**
 * @description Update product
 * @route       PUT /api/products/:id
 */
exports.updateProduct = async (req, res, next) => {
  try {
    await Product.update(
      {
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price
      },
      {
        where: {
          id: req.params.id
        },
        returning: true,
        plain: true
      }
    );

    const product = await Product.findOne({ where: { id: req.params.id } });
    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

/**
 * @description Delete product
 * @route       DELETE /api/products/:id
 */
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    });
    product.destroy();

    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
