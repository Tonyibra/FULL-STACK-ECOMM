import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import { getProductsByID } from "../Redux/actions/ProductActions";
import { Button } from "@material-ui/core";
import { foramtLBPRates } from "../util";
import "../Styles/ProductDetail.scss";
const ProductDetails = ({ currency, lbpRate }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const selector = useSelector((state) => state.ProductsByID);
	const id = location.pathname.split("/")[2];
	const getDataById = () => {
		dispatch(getProductsByID(id));
	};
	console.log(selector.ProductByID);
	useEffect(() => {
		getDataById();
	}, []);

	return (
		<div className="productdetails-container">
			<div className="right-part">
				<div className="content">
					<div className="back-btn">
						<Link to="/">
							<Button variant="contained" color="secondary">
								Back
							</Button>
						</Link>
					</div>
					<div className="img">
						{selector.ProductByID &&
						Object.keys(selector.ProductByID).length > 0 &&
						selector.ProductByID._id === id ? (
							<img
								src={selector.ProductByID.Image}
								alt={selector.ProductByID.productName}
							/>
						) : (
							<Loading />
						)}
					</div>
				</div>
			</div>
			<div className="left-part">
				<div className="content">
					<div className="product-name">
						{selector.ProductByID &&
						Object.keys(selector.ProductByID).length > 0 &&
						selector.ProductByID._id === id ? (
							<strong>{` ${selector.ProductByID.productName}`}</strong>
						) : (
							<Loading />
						)}
					</div>
					<div className="product-price">
						{selector.ProductByID &&
						Object.keys(selector.ProductByID).length > 0 &&
						selector.ProductByID._id === id ? (
							<strong>
								{currency === "LBP"
									? `${foramtLBPRates(
											`${selector.ProductByID.price * lbpRate}`
									  )}${currency}`
									: `${selector.ProductByID.price} ${currency}`}
							</strong>
						) : (
							<Loading />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
