import React from "react";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import PrivateRoute from "./routing/PrivateRoute ";
import createProduct from "./Pages/createProduct";
import { notFoundRoute } from "./util";
function App() {
	const location = useLocation();
	const NoMatch = ({ location }) => <h3>404 PAGE NOT FOUND</h3>;
	return (
		<div className="App">
			{/* NavBar */}
			<Nav />
			{/* Home page */}
			<Switch location={location} key={location.key}>
				<PrivateRoute path="/admin" exact={true} component={AdminPage} />
				<PrivateRoute
					path="/createProduct"
					exact={true}
					component={createProduct}
				/>
				<Route path="/" component={HomePage} exact />
				<Route path="/login" component={LoginPage} exact />
				<Route component={NoMatch} />
			</Switch>
		</div>
	);
}

export default App;
