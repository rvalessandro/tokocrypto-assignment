const router = require("express").Router();

const { getUsers } = require("../../controller/UserController");

router.route("/").get(getUsers);

module.exports = router;
