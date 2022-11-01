//import logo from "./logo.svg";
import "./App.css";
import Topic_Title from "./application_components/Topic_Title";



import "./App.css";
import Thumbnail from "./imageAssets/pdfImage.png";
import Cards from "./application_components/cards";
import Card from "./application_components/card.js";

function App() {
	return (
		<>
			welcome to the project
			<Cards thumbnail={Thumbnail} />
			<Topic_Title/>
			<Card />
			
		</>
	
	);


}
export default App;
