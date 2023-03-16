import React, { useEffect } from "react";
import "./LoadingScreen.css";

function LoadingScreen({ isLoading }) {
	useEffect(() => {
		const timer = setTimeout(() => {}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className="center">
				<div className="loading-screen">
					<div className="spinner"></div>
					<h1>Loading...</h1>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="center">
				<div class="loader-Div"></div>
			</div>
		</>
	);
}

export default LoadingScreen;
