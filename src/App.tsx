import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/home/home";
import Navbar from "./components/general/navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
