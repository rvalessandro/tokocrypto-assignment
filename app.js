const app = require("express")();
const morgan = require("morgan");
const bodyParser = require("body-parser");

/**
 * Middlewares
 */
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", require("./router/index"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
