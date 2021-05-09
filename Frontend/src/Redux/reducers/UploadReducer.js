import {
	PRODUCT_UPLOAD_FAIL,
	PRODUCT_UPLOAD_REQUEST,
	PRODUCT_UPLOAD_SUCCESS,
	IMAGE_UPLOAD_FAIL,
	IMAGE_UPLOAD_REQ,
	IMAGE_UPLOAD_SUCCESS,
} from "../Variables";
const initState = { CreatedProducts: [] };
export const createProductReducer = (state = initState, action) => {
	switch (action.type) {
		case PRODUCT_UPLOAD_REQUEST:
			return { ...state };
		case PRODUCT_UPLOAD_SUCCESS:
			return { ...state, CreatedProducts: action.payload };
		case PRODUCT_UPLOAD_FAIL:
			return { Products: action.payload };

		default:
			return state;
	}
};
export const uploadImageReducer = (state = { UploadImg: [] }, action) => {
	switch (action.type) {
		case IMAGE_UPLOAD_REQ:
			return { ...state };
		case IMAGE_UPLOAD_SUCCESS:
			return { ...state, UploadImg: action.payload };
		case IMAGE_UPLOAD_FAIL:
			return { UploadImg: action.payload };

		default:
			return state;
	}
};
