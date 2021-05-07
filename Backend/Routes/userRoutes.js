const router = require("express").Router();
const { registerUser } = require("../Controllers/userController.js");
//register User
router.route("/register").post(registerUser);

module.exports = router;
