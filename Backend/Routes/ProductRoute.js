const router = require("express").Router();
const {
	getPorductData,
	createProduct,
	uploadImage,
	deleteProduct,
} = require("../Controllers/ProductsController");
const { verifyToken } = require("../middleware/auth");
router.route("/").get(getPorductData);
router.route("/").post(verifyToken, createProduct);
router.route("/upload").post(verifyToken, uploadImage);
router.route("/delete/:id").delete(verifyToken, deleteProduct);
router.route("/updateProduct").patch(verifyToken, uploadImage);
module.exports = router;
