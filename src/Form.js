import React from "react";
import "./utilityClass.css";
import { useState } from "react";

function Form() {
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = async (e) => {
		// Prevent the default form submission behavior
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3001/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});

			// Throw an error if the response status is not OK
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setResponse(data.message);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex-col justify-center items-center">
					<div>
						{/* <label htmlFor="input-text">Enter text:</label> */}
						<textarea
							id="input-text"
							value={message}
							className="w-500 h-250 text-area-border"
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button className="text-area-btn rounded" type="submit">
						Submit
					</button>
					<div>
						Response:
						{response}
					</div>
				</div>
			</form>
		</>
	);
}

export default Form;
/* 

flex-col h-fit w-full justify-center items-center

w-500 h-250 text-area-border

text-area-btn rounded 

*/

/*
const handleSubmit = (e) => {
	// e.preventDefault();

	fetch("http://localhost:3001/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ message }),
	})
		.then((res) => {
			res.json();
		})
		.then((data) => setResponse(data.message));
};

*/
