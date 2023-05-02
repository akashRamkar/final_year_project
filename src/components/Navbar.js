import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
	const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
	return (
		<div className="relative bg-background_color">
			<div className="max-w-[1350px] w-[93%] relative mx-auto flex flex-row justify-between items-center py-4">
				<div className="font-Mulish text-para1 text-[28px] cursor-pointer relative">
					<Link to="/">Summarizer</Link>
				</div>
				{/* list */}
				<div className=" max-w-[500px]   ">
					<ul className="flex  flex-row gap-x-5 items-center">
						<li className=" font-Mulish text-[20px] text-para1 inline-block">
							{
								<Link to="/">
									<button>Home</button>
								</Link>
							}
						</li>
						<li className=" font-Mulish text-[20px] inline-block">
							{isLoggedIn && (
								<Link to="/files">
									<button>MyFiles</button>
								</Link>
							)}
						</li>
						{/* className={`${!isLoggedIn===false?"hidden":"font-Mulish text-[20px]"}`} */}
						<li className=" font-Mulish text-[20px] inline-block">
							{!isLoggedIn && (
								<Link to="/login">
									<button>Log in</button>
								</Link>
							)}
						</li>
						<li className=" font-Mulish text-[20px] inline-block">
							{!isLoggedIn && (
								<Link to="/signup">
									<button>Sign up</button>
								</Link>
							)}
						</li>
						<li className=" font-Mulish text-[20px] inline-block">
							{isLoggedIn && (
								<Link to="/">
									<button
										onClick={() => {
											setIsLoggedIn(false);
										}}
									>
										Logout
									</button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
