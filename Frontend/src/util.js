import { useDispatch } from "react-redux";
import { getTokenInfo } from "./Redux/actions/userActions";

const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split(".")[1]));
	} catch (e) {
		return null;
	}
};

export const getTokenData = (id) => async (dispatch) => {
	let userToken = localStorage.getItem("token");

	try {
		const decodedToken = parseJwt(userToken).id;
		if (!userToken) {
			console.log("no id");
		}
		await dispatch(getTokenInfo(decodedToken));
	} catch (error) {
		console.log("Error");
	}
};
