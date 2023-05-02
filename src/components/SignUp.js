import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

function SignUp() {
	const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [name, setName] = useState("");
	const { currentUser, signup } = useAuth();
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsLoggedIn(true);
		console.log("email:", email);
		console.log("password:", password);
		console.log("confirmPassword:", confirmPassword);
		if (password !== confirmPassword) {
			return setError("password do not match!!");
		}
		try {
			setError(" ");
			await signup(email, password);

			toast.success("Account created Successfully");
			// path to navigate and TODOS:
			//  example :- navigate("/home");
			navigate("/files");
		} catch {
			toast.error("!!! signup FAILED!!!!!!!11");
			// toast.failuer
			setError("Failed to sign up the user");
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Sign Up For Your Account
				</h1>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								User Name
							</label>
							<div className="mt-1">
								<input
									id="name"
									name="name"
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="new-password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="confirm-password"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm password
							</label>
							<div className="mt-1">
								<input
									id="confirm-password"
									name="confirm-password"
									type="password"
									autoComplete="new-password"
									required
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* {JSON.stringify(currentUser)} */}
		</div>
	);
}

export default SignUp;
