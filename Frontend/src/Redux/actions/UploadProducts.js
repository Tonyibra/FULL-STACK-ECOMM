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
	try {
		dispatch({ type: PRODUCT_UPLOAD_REQUEST });
		const res = await axios.post(getProductUrl, {
			productName,
			Image,
			description,
			category,
			brand,
			numReviews,
			Rating,
			countInStock,
			price,
		});
		dispatch({ type: PRODUCT_UPLOAD_SUCCESS, payload: res });
	} catch (err) {
		dispatch({ type: PRODUCT_UPLOAD_FAIL, payload: err });
	}
};
export const uploadImage = (file) => (dispatch) => {
	const url = "http://localhost:5000/products/upload";
	const formData = new FormData();
	formData.append("file", file);
	try {
		dispatch({ type: IMAGE_UPLOAD_REQ });
		axios
			.post(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
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
