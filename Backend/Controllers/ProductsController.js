const Product = require("../Models/ProductModel");
const fileUpload = require("express-fileupload");
path = require("path");
exports.getPorductData = async (req, res, next) => {
	try {
		// let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
		const getData = await Product.find();
		res.json(getData);
	} catch (error) {
		res.json({ message: error.message });
	}
	next();
};

exports.uploadImage = (req, res) => {
	if (req.files === null) return;
	const image = req.files.file;
	let reqPath = path.join(__dirname, "../../");
	image.mv(`${reqPath}/Frontend/public/imgs/${image.name}`, (err) => {
		if (err) {
			console.log("error img:" + err);
			return res.send(err);
		}
	});
};

exports.createProduct = async (req, res, next) => {
	try {
		const newProduct = await new Product({
			productName: req.body.productName,
			Image: req.body.Image,
			description: req.body.description,
			category: req.body.category,
			brand: req.body.brand,
			numReviews: req.body.numReviews,
			Rating: req.body.Rating,
			countInStock: req.body.countInStock,
			price: req.body.price,
		});
		const addProduct = await newProduct.save();
		res.json(addProduct);
	} catch (err) {
		res.json({ message: err.message });
	}
	next();
};
