import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchContainer from "./container/SerachContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchContainer />
      </div>
    );
  }
}

export default App;
