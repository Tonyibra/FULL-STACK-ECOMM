import React from "react";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage";
import "./App.css";
function App() {
	return (
		<div className="App">
			{/* NavBar */}
			<Nav />
			{/* Home page */}
			<HomePage />
		</div>
	);
}

export default App;
