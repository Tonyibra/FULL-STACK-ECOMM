import axios from "axios";
import {
	TOKEN_INFO_SUCCESS,
	TOKEN_INFO_REQUEST,
	TOKEN_INFO_FAIL,
} from "../Variables";
export const getTokenInfo = (id) => async (dispatch) => {
	const url = `http://localhost:5000/users/${id}`;

	try {
		dispatch({ type: TOKEN_INFO_REQUEST });
		const res = await axios.get(url);
		if (localStorage.getItem("token")) {
			dispatch({ type: TOKEN_INFO_SUCCESS, payload: res.data });
		} else {
			dispatch({ type: TOKEN_INFO_SUCCESS, payload: "" });
		}
	} catch (error) {
		dispatch({ type: TOKEN_INFO_FAIL });
		console.log(error);
	}
};
