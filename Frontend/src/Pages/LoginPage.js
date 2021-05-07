import React, { useState, useEffect } from "react";
import "../Styles/LoginPage.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../Redux/actions/LoginActions";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
	//redux
	const dispatch = useDispatch();
	const history = useHistory();
	const { data } = useSelector((state) => state.LoginData);
	//hooks
	const [email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [token, setToken] = useState("");
	//function
	const getUserName = (e) => {
		setEmail(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};

	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(loginActions(email, Password));
		setToken(localStorage.getItem("token"));
		if (token) {
			history.push("/");
		}

		console.log("TOKEN" + token);
	};
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setToken(localStorage.getItem("token"));
			history.push("/");
		}
	}, [{ data }]);

	return (
		<div className="login-container">
			<div className="login-card">
				<div className="card-header">
					<strong>Login In</strong>
					<span>
						Dont Have an account ?<Link to="/register">Register</Link>
					</span>
				</div>
				<div className="card-body">
					<div className="inputs">
						<TextField
							onChange={getUserName}
							className="input"
							id="outlined-basic"
							label="Email"
							variant="outlined"
							type="email"
							required
							value={email}
						/>
						<TextField
							onChange={getPassword}
							id="outlined-basic"
							label="Password"
							variant="outlined"
							type="password"
							required
							value={Password}
						/>
					</div>
					<div className="login-btn">
						<Button
							onClick={loginHandler}
							className="login-btn"
							variant="contained"
							color="secondary"
						>
							Log In
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
