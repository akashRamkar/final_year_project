import React from "react";
import Form from "./Form";
// import { useState } from "react";
import "./utilityClass.css";
import Navbar from "./Navbar";
// import axios from "axios";

import Footer from "./Footer";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Form />

				<Footer />
			</div>
		</>
	);
}
export default App;

/* 




const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = (e) => {
		// e.preventDefault();

		fetch("http://localhost:3001/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		})
			.then((res) => res.json())
			.then((data) => setResponse(data.message));
	};

*/

// <form onSubmit={handleSubmit}>
// 			<div className="flex-col justify-center items-center">
// 				<div>
// 					{/* <label htmlFor="input-text">Enter text:</label> */}
// 					<textarea
// 						id="input-text"
// 						value={message}
// 						className=""
// 						onChange={(e) => setMessage(e.target.value)}
// 					/>
// 				</div>
// 				<button className="text-area-btn rounded" type="submit">
// 					Submit
// 				</button>
// 				<div>
// 					Response:
// 					{response}
// 				</div>
// 			</div>
// 		</form>
