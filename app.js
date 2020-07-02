require("dotenv").config({ path: "./config/config.env" });
const app = require("express")();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const sequelize = require("./database/connection");

// Establish db conn
sequelize.authenticate();

/**
 * Middlewares
 */
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", require("./app/router/index"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
