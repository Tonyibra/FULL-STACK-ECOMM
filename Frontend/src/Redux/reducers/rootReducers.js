import { combineReducers } from "redux";
import { productsReducer } from "./ProductsReducer";
const rootReducer = combineReducers({
	Products: productsReducer,
});

export default rootReducer;
