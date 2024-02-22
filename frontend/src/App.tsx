import React from "react";
import "./App.css";
import Home from "./pages/Home";

// function App () {
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
};

export default App;
