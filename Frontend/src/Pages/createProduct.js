import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

import "../Styles/CreateProduct.scss";
const createProduct = () => {
	return (
		<div className="addProduct-container">
			<div className="title">
				<strong>Add Product</strong>
			</div>
			<div className="product-top">
				<div className="product-name">
					<label>Product Name</label>
					<TextField
						label="Product Name"
						variant="outlined"
						type="text"
						required
					/>
				</div>
				<div className="brand">
					<label>Brand</label>
					<TextField label="Brand" variant="outlined" type="text" required />
				</div>
				<div className="category">
					<label>Category</label>
					<TextField label="Category" variant="outlined" type="text" required />
				</div>
			</div>

			<div className="product-top">
				<div className="price">
					<label>Price</label>
					<TextField label="Price" variant="outlined" type="text" required />
				</div>
				<div className="Rating">
					<label>Rating</label>
					<TextField label="Rating" variant="outlined" type="text" required />
				</div>
				<div className="numReviews">
					<label>Reviews Count</label>
					<TextField
						label="Reviews Count"
						variant="outlined"
						type="text"
						required
					/>
				</div>
			</div>
			<div className="product-desc">
				<div className="description">
					<label>Description</label>
					<textarea name="description" id="" cols="30" rows="10"></textarea>
				</div>
			</div>
			<div className="submit">
				<Button variant="contained" color="primary">
					Add Product
				</Button>
			</div>
		</div>
	);
};

export default createProduct;
