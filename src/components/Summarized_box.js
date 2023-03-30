import "./Summarized_box.css";
import { useState } from "react";
import LoadingScreen from "../LoadingScreen";
function Summarizebox() {
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");
	const [showSpinner, setIsLoading] = useState("");
	const textareaRef = useState(null);
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
		<div className="border-2 py-14 w-full relative ">
			<div className="flex flex-1 gap-5 mx-4">
				<form
					onSubmit={handleSubmit}
					className="outline-none relative rounded-sm"
				>
					<button
						className="text-area-btn rounded absolute -top-10 left-[550px] "
						type="submit"
					>
						Submit
					</button>
					<div className="flex justify-center items-center">
						<button
							onClick={clearTextArea}
							className="absolute -top-11 left-[650px] min-w-[120px] text-center p-2 bg-blue-500 text-white rounded-md hover:bg-blue-800"
						>
							Clear Window
						</button>
						<div>
							{/* <label htmlFor="input-text">Enter text:</label> */}
							<textarea
								id="input-text"
								ref={textareaRef}
								value={message}
								placeholder="Summarize your text"
								className="flex-1 w-[550px] min-h-[400px] text-area-border rounded-sm"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
					</div>
				</form>
				<div className=" w-full h-full ">
					{response !== null ? (
						<div className=" flex-1 h-[400px] p-5 w-[660px]  bg-green-100 ">
							{response}
						</div>
					) : (
						<div className="flex-1  flex justify-center items-center h-[400px]  bg-yellow-200 text-center">
							{"no response from model"}
						</div>
					)}
				</div>
			</div>
			<LoadingScreen isLoading={showSpinner} />
		</div>
	);
}

export default Summarizebox;
