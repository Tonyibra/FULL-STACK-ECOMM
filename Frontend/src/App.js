import React from "react";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
function App() {
	return (
		<div className="App">
			{/* NavBar */}
			<Nav />
			{/* Home page */}
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/login" component={LoginPage} exact />
			</Switch>
		</div>
	);
}

export default App;
