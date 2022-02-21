import React from "react";
import "./App.css";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import StockListing from "./pages/StockListing/StockListing";

function App() {
  return (
    <div className="App">
      <StockListing />
    </div>
  );
}

export default App;
