import React from "react";
// import "../application_components/mid_component_style.css";
import NotesCards from "../application_components/cards";
import TopicTitleComponent from "./Topic_Title";

export default function mid_component(props) {
	let array = props.cardsArray;
	return (
		<>
			<div className="middle-layer">
				<TopicTitleComponent />
				<NotesCards cards={props.cardsArray} />
			</div>
		</>
	);
}
