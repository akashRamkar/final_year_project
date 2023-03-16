import React from "react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<div class="left-nav">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div className="right-nav">
						<button class="btn1">Log in</button>
						<button class="btn2">Sign up</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

/******
 * 
 
		<div class="nav-container">
					<ul class="nav">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact us</a>
						</li>
					</ul>
					<div class="search1">
						<button class="btn1">Log in</button>
						<button class="btn2">Sign up</button>
					</div>
				</div>








 * 
 */
