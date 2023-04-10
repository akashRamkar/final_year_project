// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Herosection from "./components/Hero_Section";
// import Informationsection from "./components/Information_section";
// import Summarizebox from "./components/Summarized_box";
// import Section1 from "./components/Section1";
// import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
// import Due from "./components/Due_section";
// import Card from "./components/Card_section";
// import Footer from "./components/Footer_section";
import data from "./data";
import { useState } from "react";
import Login from "./components/Login";
import Mainsection from "./Mainsection";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  const [used, setUsed] = useState(data);
  return (
    <div className="App1">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Mainsection used={used}></Mainsection>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
