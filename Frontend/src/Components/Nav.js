import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Select } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteState } from "../Redux/actions/userActions";
import { getTokenData } from "../util";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import "../Styles/Nav.scss";
const Nav = ({ currency, setCurrency }) => {
	const [open, setOpen] = React.useState(false);
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
	const getUser = () => {
		if (localStorage.getItem("token")) {
			let userToken = localStorage.getItem("token");
			const id = parseJwt(userToken).id;
			dispatch(getTokenData(id));
		} else {
			console.log("not authorized");
		}
	};

	const signOutUser = () => {
		dispatch(deleteState());
		histroy.push("/");
	};
	useEffect(() => {
		getUser();
	}, [selector.dbUser]);
	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<nav className="nav-container">
			<div className="nav-left">
				<div className="logo">
					<Link to="/">
						<strong>TWITT</strong>
					</Link>
				</div>
				<div className="search-bar">
					<Input color="secondary" placeholder="Search for products" />
					<Button variant="outlined" color="secondary">
						Search
					</Button>
					<div className="currency-option">
						<Select
							labelId="demo-controlled-open-select-label"
							id="demo-controlled-open-select"
							open={open}
							onClose={handleClose}
							onOpen={handleOpen}
							value={currency}
							onChange={handleChange}
						>
							<MenuItem className="menu-item" value={"USD"}>
								USD
							</MenuItem>
							<MenuItem className="menu-item" value={"LBP"}>
								LBP
							</MenuItem>
						</Select>
					</div>
				</div>
			</div>

			<div className="nav-right">
				<ul className="main-ul">
					{selector.isAdmin ? (
						<li className="main-list">
							<div className="dropdown-ico">
								<SupervisorAccountIcon fontSize="small" />
								<Link to="/admin">Admin</Link>
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
