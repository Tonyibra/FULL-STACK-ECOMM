import React, { useEffect } from "react";
import Slick from "../Components/Slick";
import ProductList from "../Components/ProductList";
import "../Styles/Slider.scss";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
import { loginActions } from "../Redux/actions/LoginActions";
const HomePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);
	return (
		<div className="home-container">
			<Slick />
			<ProductList />
		</div>
	);
};

export default HomePage;
