//import logo from "./logo.svg";
import "./App.css";
import Topic_Title from "./application_components/Topic_Title";

import "./App.css";
import Thumbnail from "./imageAssets/pdfImage.png";
import Cards from "./application_components/cards";
import "./application_components/mid_component_style.css";
// import MiddleLayer from "./application_components/mid_component";
// import Card from "./application_components/card.js";

function App() {
	const cardsArray = [
		{
			srNO: 0,
			name: "java",
			thumbnail: Thumbnail,
			cardTitle: "java",
			description: "this is the card discription",
		},
		{
			srNO: 1,
			name: "java1",
			cardTitle: "java",
			thumbnail: Thumbnail,
			description: "this is the card discription",
		},
		{
			srNO: 2,
			name: "operating-system",
			cardTitle: "operating-system",
			thumbnail: Thumbnail,
			description: "this is the card discription",
		},
		{
			srNO: 3,
			name: "DBMS",
			cardTitle: "DBMS",
			thumbnail: Thumbnail,
			description: "this is the card discription",
		},
		{
			srNO: 4,
			name: "cpp",
			cardTitle: "cpp",
			thumbnail: Thumbnail,
			description: "this is the card discription",
		},
		{
			srNO: 5,
			name: "Data structures",
			cardTitle: "Data structures",
			thumbnail: Thumbnail,
			description: "this is the card discription",
		},
	];
	return (
		<>
			<div className="middle-layer box grid">
				<Topic_Title />
				<Cards className="padding-left-10px box grid" cards={cardsArray} />
			</div>
		</>
	);
}
export default App;
