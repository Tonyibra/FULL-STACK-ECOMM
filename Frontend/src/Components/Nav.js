import React from "react";
import { Input, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../Styles/Nav.scss";
const Nav = () => {
	return (
		<nav className="nav-container">
			<div className="nav-left">
				<div className="logo">
					<strong>TWITT</strong>
				</div>
				<div className="search-bar">
					<Input color="secondary" placeholder="Search for products" />
					<Button variant="outlined" color="secondary">
						Search
					</Button>
				</div>
			</div>
			<div className="nav-right">
				<ul>
					<li>
						<ShoppingCartIcon />
						<span>Cart</span>
					</li>
					<li>
						<PersonIcon />
						<span>Sign out</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
