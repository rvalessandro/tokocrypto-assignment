const Cart = require("../models/Cart");
const User = require("../models/User");
const Product = require("../models/Product");
const Transaction = require("../models/Transaction");

const userExists = async (id) => {
  const user = await User.findOne({
    where: {
      id
    }
  });
  if (!user) return false;
  return true;
};

const getProductPrice = async (cart) => {
  const product = await Product.findOne({
    where: {
      id: cart.productId
    }
  });

  if (!product || product.stock < cart.quantity) {
    return new Error();
  }
  return product.price;
};

/**
 * @description Get all transactions
 * @route       GET /api/transactions
 */
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
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

/**
 * @description Get all transactions
 * @route       GET /api/transactions
 */
exports.createTransaction = async (req, res, next) => {
  try {
    const { userId, carts, paymentAmount } = req.body;

    /**
     * Validate data
     * Best practice is to use middleware
     */
    if (!userExists(userId)) {
      return res.status(400).send("User not found");
    }

    // Can't use foreach due to scoping limitation for ${totalPrice}
    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      try {
        const productPrice = await getProductPrice(carts[i]);
        if (productPrice instanceof Error) {
          return res
            .status(400)
            .send("Product not found or insufficient stock");
        }

        totalPrice += productPrice;
      } catch (error) {
        return res.status(400).send("Product not found or insufficient stock");
      }
    }

    if (paymentAmount < totalPrice) {
      return res.status(400).send("Insufficient cash");
    }

    // Create Transaction
    const transaction = await Transaction.create({ userId, paymentAmount });

    // Bulk insert carts
    carts.forEach((cart) => (cart.transactionId = transaction.id));
    await Cart.bulkCreate(carts);

    // Update product stock
    carts.forEach(async (cart) => {
      const product = await Product.findOne({
        where: { id: cart.productId },
        attributes: ["stock"]
      });
      await Product.update(
        {
          stock: (product.stock -= cart.quantity)
        },
        {
          where: {
            id: cart.productId
          }
        }
      );
    });

    const updatedTransaction = await Transaction.findOne({
      where: { id: transaction.id },
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Cart, include: [{ model: Product }] }
      ]
    });
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
