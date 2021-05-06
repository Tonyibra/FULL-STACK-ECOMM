import React from "react";
import { Input, Button } from "@material-ui/core";
import "../Styles/Nav.scss";
const Nav = () => {
	return (
		<nav className="nav-container">
			<div className="nav-left">
				<div className="logo">
					<strong>TWITT</strong>
				</div>
				<div className="search-bar">
					<Input
						color="secondary"
						autoFocus="true"
						placeholder="Search for products"
					/>
					<Button variant="outlined" color="secondary">
						Search
					</Button>
				</div>
			</div>
			<div className="nav-right">
				<ul>
					<li>Cart</li>
					<li>Sign out</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
