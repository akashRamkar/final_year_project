import "./App.css";
import Navbar from "./components/Navbar";

import data from "./data";
import { useState } from "react";
import Login from "./components/Login";
import Mainsection from "./Mainsection";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
// import { AuthProvider } from "./AuthContext";

function App() {
	const [used, setUsed] = useState(data);
	return (
		<div className="App1">
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={<Mainsection used={used}></Mainsection>}
				></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/signup" element={<SignUp></SignUp>}></Route>
			</Routes>
		</div>
	);
}

export default App;
