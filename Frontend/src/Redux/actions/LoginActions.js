import axios from "axios";
import {
	LOGIN_REQUEST,
	LOGIN_REQUEST_SUCCESS,
	LOGIN_REQUEST_FAIL,
} from "../Variables";

export const loginActions = (email, password) => async (dispatch) => {
	const url = "http://localhost:5000/login";
	try {
		dispatch({ type: LOGIN_REQUEST });
		const res = await axios.post(url, { email, password });
		dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data });
		//SAVE TOKEN
		console.log(res.data);
		localStorage.setItem("token", res.data.token);
	} catch (error) {
		dispatch({ type: LOGIN_REQUEST_FAIL });
	}
};
