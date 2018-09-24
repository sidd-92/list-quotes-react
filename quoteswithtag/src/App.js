import React, { Component } from "react";
import Quote from "./Components/Quote/Quote";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>List of Quotes</h1>
        <Quote />
        <Quote />
        <Quote />
        <Quote />
      </div>
    );
  }
}

export default App;
