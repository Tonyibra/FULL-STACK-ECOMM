import {
	LOGIN_REQUEST,
	LOGIN_REQUEST_FAIL,
	LOGIN_REQUEST_SUCCESS,
} from "../Variables";
const initState = { Login: [] };
export const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return { ...state };
		case LOGIN_REQUEST_SUCCESS:
			return { ...state, Login: action.payload };
		case LOGIN_REQUEST_FAIL:
			return { ...state };

		default:
			return state;
	}
};
