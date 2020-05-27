// Library Imports
import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";

// Local Import
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
