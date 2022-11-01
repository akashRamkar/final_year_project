// import logo from "./logo.svg";
import "./App.css";
// import Card from "./application_components/card.js";
import Thumbnail from "./imageAssets/pdfImage.png";
import Cards from "./application_components/cards";

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
			<Cards cards={cardsArray} />
		</>
	);
}

export default App;
