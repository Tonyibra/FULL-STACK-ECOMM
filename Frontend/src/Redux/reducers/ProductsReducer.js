import {
	GET_PRODUCT_FAIL,
	GET_PRODUCT_REQUEST,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_ID_REQUEST,
	GET_PRODUCT_ID_SUCCESS,
	GET_PRODUCT_ID_FAIL,
} from "../Variables";
const initState = { Products: [] };
export const productsReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_PRODUCT_REQUEST:
			return { ...state };
		case GET_PRODUCT_SUCCESS:
			return { ...state, Products: action.payload };
		case GET_PRODUCT_FAIL:
			return { Products: action.payload };

		default:
			return state;
	}
};
export const productsByIDReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_PRODUCT_ID_REQUEST:
			return { ...state };
		case GET_PRODUCT_ID_SUCCESS:
			return { ProductByID: action.payload };
		case GET_PRODUCT_ID_FAIL:
			return { Products: action.payload };

		default:
			return state;
	}
};
