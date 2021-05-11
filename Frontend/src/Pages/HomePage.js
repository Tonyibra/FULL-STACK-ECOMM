import React, { useEffect, useState } from "react";
import Slick from "../Components/Slick";
import ProductList from "../Components/ProductList";
import "../Styles/Slider.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
import { loginActions } from "../Redux/actions/LoginActions";
import { FeaturedProducts } from "../util";
const HomePage = ({ currency, setCurrency, lbpRate }) => {
	const selector = useSelector((state) => state.ProductsData.Products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);
	FeaturedProducts(selector);
	return (
		<div className="home-container">
			<Slick lbpRate={lbpRate} currency={currency} setCurrency={setCurrency} />
			<ProductList
				lbpRate={lbpRate}
				currency={currency}
				setCurrency={setCurrency}
			/>
		</div>
	);
};

export default HomePage;
