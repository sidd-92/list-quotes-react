import React, { Component } from "react";
import Quote from "./Components/Quote/Quote";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>List of Quotes</h1>
        <div className="collection">
          <a href="#!" className="collection-item">
            <span className="badge">1</span>
            Alan
          </a>
          <a href="#!" className="collection-item">
            <span className="new badge">4</span>
            Alan
          </a>
          <a href="#!" className="collection-item">
            Alan
          </a>
          <a href="#!" className="collection-item">
            <span className="badge">14</span>
            Alan
          </a>
        </div>
      </div>
    );
  }
}

export default App;
