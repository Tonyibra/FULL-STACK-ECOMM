import React, { useState } from "react";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import PrivateRoute from "./routing/PrivateRoute ";
import CreateProduct from "./Pages/CreateProduct";
import { notFoundRoute } from "./util";
import ProductDetails from "./Pages/ProductDetails";
function App() {
	const [currency, setCurrency] = useState("USD");
	const [lbpRate, setLbpRate] = useState(12700);
	const location = useLocation();
	const NoMatch = ({ location }) => <h3>404 PAGE NOT FOUND</h3>;
	return (
		<div className="App">
			{/* NavBar */}
			<Nav currency={currency} setCurrency={setCurrency} />
			{/* Home page */}
			<Switch location={location} key={location.key}>
				<PrivateRoute path="/admin" exact={true} component={AdminPage} />
				<PrivateRoute
					path="/CreateProduct"
					exact={true}
					component={CreateProduct}
				/>
				<Route path="/" exact>
					<HomePage
						lbpRate={lbpRate}
						currency={currency}
						setCurrency={setCurrency}
					/>
				</Route>
				<Route path="/product/:id" exact>
					<ProductDetails currency={currency} lbpRate={lbpRate} />
				</Route>
				<Route path="/login" component={LoginPage} exact />
				<Route component={NoMatch} />
			</Switch>
		</div>
	);
}

export default App;
