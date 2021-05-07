import axios from "axios";
import {
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_REQUEST,
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
