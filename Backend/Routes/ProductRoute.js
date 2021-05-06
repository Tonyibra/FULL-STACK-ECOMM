const router = require("express").Router();
const {
	getPorductData,
	createProduct,
} = require("../Controllers/userController");
router.route("/").get(getPorductData);
router.route("/").post(createProduct);
module.exports = router;
