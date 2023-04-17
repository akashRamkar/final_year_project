import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.js";
import AuthProvider from "./AuthContext";
import UserDataProvider from "./UserContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AppContextProvider>
		<AuthProvider>
			<BrowserRouter>
				<UserDataProvider>
					<App />
					{/* <Toaster/> */}
					<Toaster></Toaster>
				</UserDataProvider>
			</BrowserRouter>
		</AuthProvider>
	</AppContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
