import React, { useRef } from "react";
import "./utilityClass.css";
import { useState } from "react";

import LoadingScreen from "./LoadingScreen";

function Form() {
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");
	const [showSpinner, setIsLoading] = useState("");
	const textareaRef = useRef(null);
	// setIsLoading(false);

	const handleSubmit = async (e) => {
		// Prevent the default form submission behavior
		e.preventDefault();

		try {
			setIsLoading(true);
			// <Loading isLoading={true} />
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
			setIsLoading(false);
			setResponse(data.message);
		} catch (error) {
			console.error(error);
		}
	};

	function clearTextArea() {
		const textArea = textareaRef.current;

		setMessage("");

		textArea.value = "";
		setResponse("");
		// setIsLoading(false);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex-col justify-center items-center">
					<div>
						{/* <label htmlFor="input-text">Enter text:</label> */}
						<textarea
							id="input-text"
							ref={textareaRef}
							value={message}
							placeholder="Summarize your text"
							className="w-500 h-250 text-area-border overflow-y-scroll"
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button className="text-area-btn rounded" type="submit">
						Submit
					</button>
					<button onClick={clearTextArea}>Clear Window</button>
				</div>
			</form>
			<LoadingScreen isLoading={showSpinner} />

			{response !== null ? (
				<div>{response}</div>
			) : (
				<p>{"no response from model"}</p>
			)}
			{/* <div>
				Response:
				{response === null ? "ai response not generated" : response}
			</div> */}
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
