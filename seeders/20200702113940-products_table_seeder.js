const bcrypt = require("bcrypt");
const faker = require("faker");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let products = [];
    for (let i = 0; i < 20; i++) {
      products.push({
        id: uuidv4(),
        name: faker.commerce.productName(),
        stock: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 100000),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert("products", products);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
