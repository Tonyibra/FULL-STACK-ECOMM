import React from "react";
import { Input, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
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
					<Link to="/cart">
						<li>
							<ShoppingCartIcon />
							<span>Cart</span>
						</li>
					</Link>
					<Link to="/login">
						<li>
							<PersonIcon />
							<span>Log in</span>
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
