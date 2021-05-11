import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByID } from "../Redux/actions/ProductActions";
import "../Styles/ProductDetail.scss";
const ProductDetails = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.ProductByID);
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const getDataById = () => {
		dispatch(getProductsByID(id));
	};
	useEffect(() => {
		getDataById();
	});
	return (
		<div className="productdetails-container">
			<div className="left-part">
				<div className="content">
					<div className="img">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
