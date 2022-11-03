import React from "react";
// import Card from "./card";
import "./card-style.css";
import card_layout from "./card_layout";
export default function cards(props) {
	return (
		<>
<<<<<<< HEAD
			<div className="container-fluid d-flex justify-content-center box grid">
				<div className="row col">
					{/* <div className="col-md-4">
						<NewCard thumbnail={props.thumbnail} />
					</div> */}
					<div className="col-md-4 grid box">
						{props.cards.map(card_layout)}
					</div>
=======
			<div className="container-fluid ">
				<div className="row">
					
					<div className="col-md-4">{props.cards.map(card_layout)}</div>
>>>>>>> c555b51ac4556a46d5f2bb7d99ad0eb2e74f0b1f

					
				</div>
			</div>
		</>
	);
}
