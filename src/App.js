import React, { Component } from "react";
import NavBar from "./components/NavBar";
import MotivationList from "./components/MotivationList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MotivationList />
      </div>
    );
  }
}

export default App;
