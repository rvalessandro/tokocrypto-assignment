module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("carts", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        autoIncrement: false,
        primaryKey: true
      },
      product_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "products",
          key: "id"
        }
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      grand_total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("carts");
  }
};
