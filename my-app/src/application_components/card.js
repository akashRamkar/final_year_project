import React from "react";
import "./card_layout.css";

export default function card(props) {
	return (
		<div className="card text-center ">
			<div className="">
				<img
					src={props.thumbnail}
					// className="card-img-top"
					alt="thumbnail_image"
					className="img-height img-bottom-line"
				/>
				<div className="card-body card-text">
					<h5 className="text-dark card-title">{props.cardTitle}</h5>
					<p className="text-secondary ">{props.description}</p>

					<a href="..." className="btn btn-primary text-center">
						btn
					</a>
				</div>
			</div>
		</div>
	);
}
card.defaultProps = {
	cardTitle: "Notes Card",
	description:
		"this is the default card description for the testing puposes only,lorem jdkfjsoipajvkasvjo isjvksnvokvksvknvklpasmvkdmkvpjsdaoiphfjinfjsdhuihffpsjadknkjjdpjsklbjf",
	footerMessage: "last updated 3 Min ago",
};
/*

 <div className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href="..." className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
 */

/////////////////////////////////
/*

>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card" style={{ height: "30px;" }}>
						<img
							src={props.thumbnail}
							className="card-img-top"
							alt="pdf thumbnail"
						/>
						<div className="card-body" style={{ height: "30px;" }}>
							<h5 className="card-title">{props.cardTitle}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{props.footerMessage}</small>
						</div>
					</div>
				</div>
			</div>
			*/
