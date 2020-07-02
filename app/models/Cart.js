"use strict";

const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      autoIncrement: false,
      primaryKey: true
    },
    productId: {
      field: "product_id",
      type: Sequelize.UUID,
      allowNull: false
    },
    userId: {
      field: "user_id",
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    grandTotal: {
      field: "grand_total",
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

Cart.beforeCreate((cart) => {
  cart.id = uuidv4();
});

module.exports = Cart;
