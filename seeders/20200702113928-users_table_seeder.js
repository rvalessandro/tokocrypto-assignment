const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: uuidv4(),
        name: "John Doe",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("admin", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
