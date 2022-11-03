import React from "react";
import "./card_layout.css";
export default function card_layout(props) {
	return (
		<>
			<div className="card-border text-justify fit-text card-layout">
				<div className="card-img">
					<img src={props.thumbnail} alt="thumbnail" />
				</div>
				<div className="box">
				<div className="center-text">
					<h5>{props.cardTitle}</h5>
				</div>
				<p id="decrip">{props.description}</p>
				<a href="..." className="btn btn-primary btn-center">
					button
				</a>
				</div>
			</div>
		</>
	);
}
card_layout.defaultProps = {
	cardTitle: "Notes Card",
	description:
		"this is the default card description for the testing puposes only,lorem jdkfjsoipajvkasvjo isjvksnvokvksvknvklpasmvkdmkvpjsdaoiphfjinfjsdhuihffpsjadknkjjdpjsklbjf",
	footerMessage: "last updated 3 Min ago",
};
