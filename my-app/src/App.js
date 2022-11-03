//import logo from "./logo.svg";
import "./App.css";
import Topic_Title from "./application_components/Topic_Title";

import "./App.css";
import img1 from "./imageAssets/image1.png"
import Thumbnail from "./imageAssets/pdfImage.png";
import Cards from "./application_components/cards";
import Card from "./application_components/card.js";
import Footer from "./application_components/Footer";
import Hometext from "./application_components/Hometext";
import Navbar from "./application_components/Navbar";

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
			cardTitle: "OS",
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
			cardTitle: "DSA",
			thumbnail: Thumbnail,
			description: "this is the card discription",
		},
	];
	return (
		<>


			<Navbar/>
            <Hometext/>
            <img  className="photo" src={img1} alt=""/>
			<Cards cards={cardsArray} />
			<Topic_Title />
			<Footer />
		</>
	);
}
export default App;
