import axios from "axios";
import {
	PRODUCT_UPLOAD_FAIL,
	PRODUCT_UPLOAD_REQUEST,
	PRODUCT_UPLOAD_SUCCESS,
	IMAGE_UPLOAD_FAIL,
	IMAGE_UPLOAD_SUCCESS,
	IMAGE_UPLOAD_REQ,
} from "../Variables";

export const uploadProducts = (
	productName,
	Image,
	description,
	category,
	brand,
	numReviews,
	Rating,
	countInStock,
	price
) => async (dispatch) => {
	const getProductUrl = "http://localhost:5000/products";
	const token = localStorage.getItem("token");
	let config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		dispatch({ type: PRODUCT_UPLOAD_REQUEST });
		const res = await axios.post(
			getProductUrl,
			{
				productName,
				Image,
				description,
				category,
				brand,
				numReviews,
				Rating,
				countInStock,
				price,
			},
			config
		);
		dispatch({ type: PRODUCT_UPLOAD_SUCCESS, payload: res });
	} catch (err) {
		dispatch({ type: PRODUCT_UPLOAD_FAIL, payload: err });
	}
};
export const uploadImage = (file) => (dispatch) => {
	const url = "http://localhost:5000/products/upload";
	const formData = new FormData();
	const token = localStorage.getItem("token");
	formData.append("file", file);
	try {
		dispatch({ type: IMAGE_UPLOAD_REQ });
		axios
			.post(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log("error", err);
			});
		dispatch({
			type: IMAGE_UPLOAD_SUCCESS,
			payload: `/imgs/${file.name}`,
		});
	} catch (error) {
		dispatch({ type: IMAGE_UPLOAD_FAIL });
		console.log(error);
	}
};
