"use strict";

const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Product = require("./Product");

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      autoIncrement: false,
      primaryKey: true
    },
    transactionId: {
      field: "transaction_id",
      type: Sequelize.UUID,
      allowNull: false
    },
    productId: {
      field: "product_id",
      type: Sequelize.UUID,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
    tableName: "carts"
  }
);

Cart.belongsTo(Product, {
  foreignKey: "productId"
});

Cart.beforeCreate((cart) => {
  cart.id = uuidv4();
});

module.exports = Cart;
