import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
	const parseJwt = (token) => {
		try {
			return JSON.parse(atob(token.split(".")[1]));
		} catch (e) {
			return null;
		}
	};

	const isAdmin = () => {
		const token = localStorage.getItem("token");
		if (token) {
			let getAdmin = parseJwt(token).isAdmin;
			return getAdmin;
		} else {
			<Redirect to="/" />;
		}
	};
	useEffect(() => {
		if (localStorage.getItem("token")) {
			isAdmin();
			console.log(isAdmin());
		}
	}, []);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAdmin() ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PrivateRoute;
