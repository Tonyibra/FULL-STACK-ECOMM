import axios from "axios";
import {
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_REQUEST,
	GET_PRODUCT_ID_REQUEST,
	GET_PRODUCT_ID_SUCCESS,
	GET_PRODUCT_ID_FAIL,
} from "../Variables";

export const getProducts = () => async (dispatch) => {
	try {
		const getProductUrl = "http://localhost:5000/products";
		dispatch({ type: GET_PRODUCT_REQUEST });
		const { data } = await axios.get(getProductUrl);
		dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
	} catch (err) {
		dispatch({ type: GET_PRODUCT_FAIL, payload: err });
	}
};
export const getProductsByID = (id) => async (dispatch) => {
	try {
		const getProductUrl = `http://localhost:5000/products/${id}`;
		dispatch({ type: GET_PRODUCT_ID_REQUEST });
		const { data } = await axios.get(getProductUrl);
		dispatch({ type: GET_PRODUCT_ID_SUCCESS, payload: data });
	} catch (err) {
		dispatch({ type: GET_PRODUCT_ID_FAIL, payload: err });
	}
};
export const deleteProducts = (id) => async (dispatch) => {
	const deleteURl = `http://localhost:5000/products/delete/${id}`;

	try {
		const deleteProductHandler = await axios.delete(deleteURl);
	} catch (error) {
		console.log(error);
	}
};
