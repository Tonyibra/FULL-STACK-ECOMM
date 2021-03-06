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
exports.getProductByID = async (req, res, next) => {
	const id = req.params.id;
	try {
		const product = await Product.findById(id);
		if (product) {
			res.json(product);
		} else {
			res.json("ID NOT VALID");
		}
	} catch (error) {
		console.log({ errorMessage: errorMessage.error });
	}
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
exports.deleteProduct = async (req, res, next) => {
	const id = req.params.id;

	try {
		const product = await Product.findById(id);
		product.delete();
		res.json(`deleted ${product}`);
	} catch (error) {
		res.send({ message: error.message });
	}

	next;
};
