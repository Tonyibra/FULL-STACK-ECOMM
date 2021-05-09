const router = require("express").Router();
const {
	getPorductData,
	createProduct,
	uploadImage,
} = require("../Controllers/ProductsController");
router.route("/").get(getPorductData);
router.route("/").post(createProduct);
router.route("/upload").post(uploadImage);
module.exports = router;
