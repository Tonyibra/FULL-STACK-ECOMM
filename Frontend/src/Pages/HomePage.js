import React, { useState, useEffect } from "react";
import Slick from "../Components/Slick";
import "../Styles/Slider.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
const HomePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<div className="home-container">
			<Slick />
		</div>
	);
};

export default HomePage;
