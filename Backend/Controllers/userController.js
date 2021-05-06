const Product = require("../Models/ProductModel");
exports.getPorductData = async (req, res, next) => {
	try {
		const getData = await Product.find();
		res.json(getData);
	} catch (error) {
		res.json({ message: error.message });
	}
	next();
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
