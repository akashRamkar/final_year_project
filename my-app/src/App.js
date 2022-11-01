// import logo from "./logo.svg";
import "./App.css";
// <<<<<<< HEAD
import Topic_Title from "./application_components/Topic_Title";



import "./App.css";
import Thumbnail from "./imageAssets/pdfImage.png";
import Cards from "./application_components/cards";

function App() {
	return (
		<>
			welcome to the project
			<Cards thumbnail={Thumbnail} />
			<Topic_Title/>
		</>
	);
}
export default App;
