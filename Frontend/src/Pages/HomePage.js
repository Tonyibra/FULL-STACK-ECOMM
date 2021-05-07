import React, { useEffect } from "react";
import Slick from "../Components/Slick";
import "../Styles/Slider.scss";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
const HomePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className="home-container">
			<Slick />
		</div>
	);
};

export default HomePage;
