"use strict";

const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Transaction = sequelize.define(
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
      allowNull: false
    },
    email: {
      type: Sequelize.UUID,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  },
  {
    tableName: "transactions"
  }
);

Transaction.beforeCreate((transaction) => {
  transaction.id = uuidv4();
});

module.exports = Transaction;
