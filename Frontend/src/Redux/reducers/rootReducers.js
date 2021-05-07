import { combineReducers } from "redux";
import { productsReducer } from "./ProductsReducer";
import { loginReducer } from "./LoginReducer.js";
import { tokeninfo } from "./userReducer";
const rootReducer = combineReducers({
	ProductsData: productsReducer,
	LoginData: loginReducer,
	tokenInfo: tokeninfo,
});

export default rootReducer;
