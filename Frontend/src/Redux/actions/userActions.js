import axios from "axios";
import {
	TOKEN_INFO_SUCCESS,
	TOKEN_INFO_REQUEST,
	TOKEN_INFO_FAIL,
	SIGN_OUT,
} from "../Variables";
export const getTokenInfo = (id) => async (dispatch) => {
	try {
		const url = `http://localhost:5000/user/${id}`;
		dispatch({ type: TOKEN_INFO_REQUEST });
		const res = await axios.get(url);
		dispatch({ type: TOKEN_INFO_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: TOKEN_INFO_FAIL });
		console.log(error);
	}
};
export const deleteState = () => async (dispatch) => {
	dispatch({ type: SIGN_OUT });
	localStorage.removeItem("token");
};
