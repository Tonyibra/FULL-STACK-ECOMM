import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTokenInfo } from "../Redux/actions/userActions";
import "../Styles/Nav.scss";
const Nav = () => {
	const histroy = useHistory();
	const [isAdmin, setAdmin] = useState(false);
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
		let userToken = localStorage.getItem("token");
		const id = parseJwt(userToken).id;
		dispatch(getTokenInfo(id));
	};
	const signOutUser = (e) => {
		localStorage.removeItem("token");
		histroy.push("/");
	};

	useEffect(() => {
		try {
			getUser();
		} catch (error) {
			console.log(error);
		}
	});

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
						<li>
							<SupervisorAccountIcon />
							<span>Admin</span>
						</li>
					) : (
						""
					)}
					<Link to="/cart">
						<li className="main-list">
							<ShoppingCartIcon />
							<span>Cart</span>
						</li>
					</Link>
					{Object.keys(selector).length > 0 ? (
						<div className="dropdown">
							<div className="name">
								{selector.username ? <span>{selector.username}</span> : " "}
							</div>
							<div className="dropdown-menu">
								<Link to="/profile">Profile</Link>
								<Link onClick={signOutUser}>
									<span>Sign Out</span>
								</Link>
							</div>
						</div>
					) : (
						<Link to="/login">
							<li className="main-list">
								<PersonIcon />
								<span>Log in</span>
							</li>
						</Link>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
