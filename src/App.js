import React from "react";
import "./App.css";
import { Header } from './components/Header';
import RandomUserApp from "./components/RandomUserApp";

function App() {
  return (
    <div className="App">
      <Header />
      <RandomUserApp />
    </div>);
}

export default App;
