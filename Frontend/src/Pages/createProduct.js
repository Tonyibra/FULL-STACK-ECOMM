import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/CreateProduct.scss";
import { uploadProducts, uploadImage } from "../Redux/actions/UploadProducts";
import axios from "axios";
const CreateProduct = () => {
	const selector = useSelector((state) => state.IMGS);
	const dispatch = useDispatch();
	const [product, setProduct] = useState(" ");
	const [brand, setBrand] = useState(" ");
	const [category, setCategory] = useState(" ");
	const [price, setPrice] = useState(" ");
	const [stars, setStars] = useState(" ");
	const [ratingCount, setRatingCount] = useState(" ");
	const [description, setDescription] = useState("");
	const [countInStock, setCountInStock] = useState("10");
	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("Choose File");
	const [Image, setImage] = useState(" ");

	const onChange = (e) => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
	};

	const setProductName = (e) => {
		setProduct(e.target.value);
	};
	const setBrandName = (e) => {
		setBrand(e.target.value);
	};
	const setCategoryName = (e) => {
		setCategory(e.target.value);
	};
	const setPriceFunction = (e) => {
		setPrice(e.target.value);
	};
	const setStarsFunction = (e) => {
		setStars(e.target.value);
	};
	const setRatingCountFunction = (e) => {
		setRatingCount(e.target.value);
	};
	const setDescriptionFunction = (e) => {
		setDescription(e.target.value);
	};
	const uploadingImg = () => {
		try {
			dispatch(uploadImage(file));
		} catch (err) {
			console.log(err);
		}
	};
	const submitData = (e) => {
		e.preventDefault();

		try {
			uploadingImg();

			setImage(`/imgs/${filename}`);
		} catch (err) {
			console.log(err);
		}
		console.log(Image);
		if (Image === "" || Image === " ") {
			setImage(`/imgs/${filename}`);
		} else {
			console.log("Uploading...");
		}

		dispatch(
			uploadProducts(
				product,
				Image,
				description,
				category,
				brand,
				stars,
				ratingCount,
				countInStock,
				price
			)
		);
	};

	return (
		<div className="addProduct-container">
			<div className="title">
				<strong>Add Product</strong>
			</div>
			<div className="product-top">
				<div className="product-name">
					<label>Product Name</label>
					<TextField
						onChange={setProductName}
						label="Product Name"
						variant="outlined"
						type="text"
						required
						value={product}
					/>
				</div>
				<div className="brand">
					<label>Brand</label>
					<TextField
						onChange={setBrandName}
						label="Brand"
						variant="outlined"
						type="text"
						required
						value={brand}
					/>
				</div>
				<div className="category">
					<label>Category</label>
					<TextField
						onChange={setCategoryName}
						label="Category"
						variant="outlined"
						type="text"
						required
						value={category}
					/>
				</div>
			</div>

			<div className="product-top">
				<div className="price">
					<label>Price</label>
					<TextField
						onChange={setPriceFunction}
						label="Price"
						variant="outlined"
						type="text"
						required
						value={price}
					/>
				</div>
				<div className="Rating">
					<label>Rating</label>
					<TextField
						onChange={setStarsFunction}
						label="Rating"
						variant="outlined"
						type="text"
						required
						value={stars}
					/>
				</div>
				<div className="numReviews">
					<label>Reviews Count</label>
					<TextField
						onChange={setRatingCountFunction}
						label="Reviews Count"
						variant="outlined"
						type="text"
						required
						value={ratingCount}
					/>
				</div>
			</div>
			<div className="product-desc">
				<input onChange={onChange} type="file" id="customFile" />
				<label htmlFor="customFile">{filename}</label>
				<div className="description">
					<label>Description</label>
					<textarea
						onChange={setDescriptionFunction}
						name="description"
						id=""
						cols="30"
						rows="10"
						value={description}
					></textarea>
				</div>
			</div>
			<div className="submit">
				<Button onClick={submitData} variant="contained" color="primary">
					Add Product
				</Button>
			</div>
		</div>
	);
};

export default CreateProduct;
