import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../Styles/CreateProduct.scss";
import { uploadProducts, uploadImage } from "../Redux/actions/UploadProducts";

import axios from "axios";
const CreateProduct = () => {
	const selector = useSelector((state) => state.IMGS);
	const dispatch = useDispatch();
	const history = useHistory();
	const [product, setProduct] = useState(" ");
	const [brand, setBrand] = useState(" ");
	const [category, setCategory] = useState(" ");
	const [price, setPrice] = useState(" ");
	const [stars, setStars] = useState(" ");
	const [ratingCount, setRatingCount] = useState(" ");
	const [description, setDescription] = useState("");
	const [countInStock, setCountInStock] = useState("10");
	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("Upload Product Image");
	const [Image, setImage] = useState("");

	const onChange = (e) => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
		setImage(`/imgs/${e.target.files[0].name}`);
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
	const reset = () => {
		setProduct(" ");
		setBrand(" ");
		setCategory(" ");
		setPrice(" ");
		setStars(" ");
		setRatingCount(" ");
		setDescription(" ");
	};
	const uploadingImg = () => {
		try {
			dispatch(uploadImage(file));
			console.log("trying to add img");
		} catch (err) {
			console.log(err);
		}
	};
	const backbtnHandler = () => {
		history.push("/");
	};
	const submitData = (e) => {
		e.preventDefault();
		try {
			uploadingImg();
		} catch (err) {
			console.log(err);
		}
		console.log(Image);
		if (Image === " ") {
			return;
		} else {
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
		}
		reset();
	};

	return (
		<div className="addProduct-container">
			<div className="title">
				<div className="product">
					<strong>Add Product</strong>
				</div>
				<div className="back-btn">
					<Button onClick={backbtnHandler} variant="contained" color="primary">
						Back
					</Button>
				</div>
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
				<div className="open-img">
					<div className="label-img">
						<label htmlFor="customFile">{filename}</label>
					</div>
					<div className="input-img">
						<input
							className="upload-box"
							onChange={onChange}
							type="file"
							id="customFile"
						/>
					</div>
				</div>
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
