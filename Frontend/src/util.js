import { getTokenInfo } from "./Redux/actions/userActions";
import OneStar from "./reviews/one.png";
import numeral from "numeral";
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

export const stars = (rating) => {
	//convert Ratings to stars
};
export const FeaturedProducts = (products) => {
	return Object.keys(products).length;
};

export const foramtLBPRates = (rate) => {
	const lbpFormatter = numeral(rate).format("0,0");
	return lbpFormatter;
};
