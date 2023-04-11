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
		<div
			className="border-2 py-14 w-full relative mx-auto flex justify-center items-center"
			id="project"
		>
			<div className="flex flex-1 gap-1  mx-auto justify-center items-center">
				<form
					onSubmit={handleSubmit}
					className="outline-none relative rounded-sm"
				>
					<button
						className="text-area-btn rounded-md absolute -top-11 left-[590px] min-w-[120px] text-center p-2 bg-blue-500 text-white hover:bg-blue-800 "
						type="submit"
					>
						Submit
					</button>
					<div className="flex justify-center items-center pl-40 pt-4  ">
						<button
							onClick={clearTextArea}
							className="absolute -top-11 left-[720px] min-w-[120px] text-center p-2 bg-blue-500 text-white rounded-md hover:bg-blue-800"
						>
							Clear Window
						</button>
						<div className="border-2">
							{/* <label htmlFor="input-text">Enter text:</label> */}
							<textarea
								id="input-text"
								ref={textareaRef}
								value={message}
								placeholder="Summarize your text"
								className="flex-1 xl:w-[550px] min-h-[400px] min-w-[470px] text-area-border rounded-sm outline-none pt-2 pl-2"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
					</div>
				</form>
				<div className=" w-[580px] h-full pt-4  ">
					{response !== null ? (
						<div className=" flex-1 min-h-[405px] p-5 xl:w-[98%] w-[82%]  bg-[#F7FBFE] border-2  ">
							{response}
						</div>
					) : (
						<div className="flex-1  flex justify-center items-center min-h-[405px] p-5 xl:w-[98%]   bg-[#F7FBFE] text-center">
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
