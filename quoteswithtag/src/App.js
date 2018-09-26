import React, { Component } from "react";
import ListQuotes from "./Components/ListQuotes/ListQuotes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="collection" style={{ padding: "15px" }}>
          <h4>List of Quotes By Author</h4>
          <ListQuotes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
