const router = require("express").Router();
const {
	registerUser,
	login,
	getById,
} = require("../Controllers/userController.js");
//register User
router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/user/:id").get(getById);

module.exports = router;
