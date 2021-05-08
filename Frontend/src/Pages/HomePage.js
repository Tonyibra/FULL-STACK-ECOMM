import React, { useEffect } from "react";
import Slick from "../Components/Slick";
import ProductList from "../Components/ProductList";
import "../Styles/Slider.scss";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
import { getTokenInfo } from "../Redux/actions/userActions";
const HomePage = () => {
	const parseJwt = (token) => {
		try {
			return JSON.parse(atob(token.split(".")[1]));
		} catch (e) {
			return null;
		}
	};
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);

	useEffect(() => {
		let userToken = localStorage.getItem("token");
		if (userToken === null) {
			console.log("not authorized");
			return;
		}
		const id = parseJwt(userToken).id;
		console.log(id);
		try {
			if (id !== null) {
				dispatch(getTokenInfo(id));
			}
		} catch (error) {
			console.log(error);
		}
	}, [dispatch]);
	return (
		<div className="home-container">
			<Slick />
			<ProductList />
		</div>
	);
};

export default HomePage;
