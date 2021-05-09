import { combineReducers } from "redux";
import { productsReducer } from "./ProductsReducer";
import { loginReducer } from "./LoginReducer.js";
import { tokeninfo } from "./userReducer";
import { createProductReducer, uploadImageReducer } from "./UploadReducer";
const rootReducer = combineReducers({
	ProductsData: productsReducer,
	LoginData: loginReducer,
	tokenInfo: tokeninfo,
	uploads: createProductReducer,
	IMGS: uploadImageReducer,
});

export default rootReducer;
