import React, { useEffect } from "react";
import Slick from "../Components/Slick";
import ProductList from "../Components/ProductList";
import "../Styles/Slider.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
import { loginActions } from "../Redux/actions/LoginActions";
import { FeaturedProducts } from "../util";
const HomePage = () => {
	const selector = useSelector((state) => state.ProductsData.Products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);
	FeaturedProducts(selector);
	return (
		<div className="home-container">
			<Slick />
			<ProductList />
		</div>
	);
};

export default HomePage;
