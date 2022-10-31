import React from "react";
import Card from "./card";
export default function cards(props) {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					<div className="col-md-4">
						<Card thumbnail={props.thumbnail} />
					</div>
					<div className="col-md-4">
						<Card thumbnail={props.thumbnail} />
					</div>
					<div className="col-md-4">
						<Card thumbnail={props.thumbnail} />
					</div>
					<div className="col-md-4">
						<Card thumbnail={props.thumbnail} />
					</div>
					<div className="col-md-4">
						<Card thumbnail={props.thumbnail} />
					</div>
				</div>
			</div>
		</>
	);
}
