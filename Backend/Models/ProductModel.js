const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true,
	},
	Image: {
		type: String,
		required: true,
	},
	Date: {
		type: Date,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	numReviews: {
		type: Number,
		required: true,
		default: 0,
	},
	Rating: {
		type: Number,
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
		default: 0,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
});
module.exports = mongoose.model("Product", productSchema);
