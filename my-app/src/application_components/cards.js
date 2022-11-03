import React from "react";
// import Card from "./card";
import "./card-style.css";
import card_layout from "./card_layout";
export default function cards(props) {
	return (
		<>
			<div className="container-fluid ">
				<div className="row">
					<div className="col-md-4">{props.cards.map(card_layout)}</div>
				</div>
			</div>
		</>
	);
}
