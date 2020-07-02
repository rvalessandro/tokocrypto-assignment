"use strict";

const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const User = require("./User");
const Cart = require("./Cart");

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      autoIncrement: false,
      primaryKey: true
    },
    userId: {
      field: "user_id",
      type: Sequelize.UUID,
      allowNull: false
    },
    paymentAmount: {
      field: "payment_amount",
      type: Sequelize.INTEGER,
      allowNull: false
    },

    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  },
  {
    tableName: "transactions",
    paranoid: true
  }
);

Transaction.belongsTo(User, { foreignKey: "userId" });
Transaction.hasMany(Cart, {
  foreignKey: "transactionId"
});

Transaction.beforeCreate((transaction) => {
  transaction.id = uuidv4();
});

module.exports = Transaction;
