import {
	TOKEN_INFO_FAIL,
	TOKEN_INFO_REQUEST,
	TOKEN_INFO_SUCCESS,
} from "../Variables";
const initState = { UserTokenInfo: {} };

export const tokeninfo = (state = initState, action) => {
	switch (action.type) {
		case TOKEN_INFO_REQUEST:
			return { ...state };
		case TOKEN_INFO_SUCCESS:
			return { ...state, UserTokenInfo: action.payload };
		case TOKEN_INFO_FAIL:
			return state;

		default:
			return state;
	}
};
