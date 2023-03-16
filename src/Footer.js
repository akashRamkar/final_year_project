import "./footer.css";
import "./utilityClass.css";
export default function Footer() {
	return (
		<div class="footer-container">
			<footer>
				<ul class="footer-list">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#news">News</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
				</ul>
				<div>
					<p className="text-white">Copyright © My Website 2023</p>
				</div>

				<div>
					<p class="text-white">
						<span>©</span> 2022 Copyright:
					</p>
				</div>
			</footer>
		</div>
	);
}

/*    



import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "lightgray", textAlign: "center", padding: "20px" }}>
    <ul class="footer-list">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#news">News</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
					</ul>
          <div>
          <p>Copyright © My Website 2023</p>
          </div>
      
      <div>
      <p class="">© 2022 Copyright:</p>
      </div>
    </footer>
  );
};

export default Footer;


*/

/*   



<footer class="">
				<div class="">
					<ul class="footer-list">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#news">News</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
					</ul>
					<p className="">© Final_year_project_Group_1</p>

					<div className="">
						{" "}
					
						<p class="">© 2022 Copyright:</p>
					</div>
				</div>
			</footer>






*/
