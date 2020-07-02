"use strict";

const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      autoIncrement: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
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
    tableName: "products"
  }
);

Product.beforeCreate((product) => {
  product.id = uuidv4();
});

module.exports = Product;
