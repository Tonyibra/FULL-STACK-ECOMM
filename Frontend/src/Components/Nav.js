import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteState } from "../Redux/actions/userActions";
import "../Styles/Nav.scss";
const Nav = () => {
	const histroy = useHistory();

	const selector = useSelector((state) => state.tokenInfo.UserTokenInfo);
	const dispatch = useDispatch();
	const parseJwt = (token) => {
		try {
			return JSON.parse(atob(token.split(".")[1]));
		} catch (e) {
			return null;
		}
	};

	const signOutUser = () => {
		dispatch(deleteState());
		histroy.push("/");
	};

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
				<ul className="main-ul">
					{selector.isAdmin ? (
						<li className="main-list">
							<div className="dropdown-ico">
								<SupervisorAccountIcon fontSize="small" />
								<span>Admin</span>
							</div>
						</li>
					) : (
						<Link to="/login">
							<li className="main-list">
								<PersonIcon fontSize="small" />
								<span>Log in</span>
							</li>
						</Link>
					)}
					<Link to="/cart">
						<li className="main-list">
							<div className="dropdown-ico">
								<ShoppingCartIcon className="drop-ico" fontSize="small" />
								<span>Cart</span>
							</div>
						</li>
					</Link>
					{Object.keys(selector).length > 0 ? (
						<div className="dropdown">
							<div className="name">
								{selector.username ? (
									<div className="dropdown-ico">
										<ArrowDropDownIcon className="drop-ico" />
										<span>{selector.username}</span>
									</div>
								) : (
									""
								)}
							</div>
							<div className="dropdown-menu">
								<Link to="/profile">Profile</Link>
								<Link onClick={signOutUser}>
									<span>Sign Out</span>
								</Link>
							</div>
						</div>
					) : (
						""
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
