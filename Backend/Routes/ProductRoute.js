const router = require("express").Router();
const {
	getPorductData,
	createProduct,
} = require("../Controllers/ProductsController");
router.route("/").get(getPorductData);
router.route("/").post(createProduct);
module.exports = router;
