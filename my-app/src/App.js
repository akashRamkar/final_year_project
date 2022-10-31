// import logo from "./logo.svg";
import "./App.css";
// import Card from "./application_components/card.js";
import Thumbnail from "./imageAssets/pdfImage.png";
import Cards from "./application_components/cards";

function App() {
	return (
		<>
			welcome to the project
			{/* <Card thumbnail={Thumbnail} /> */}
			<Cards thumbnail={Thumbnail} />
		</>
	);
}

export default App;
