import React, { Component } from "react";
import Quote from "./Components/Quote/Quote";
import "./App.css";
import { getAllQuotes } from "./Services/quotesDatabase.js";
class App extends Component {
  render() {
    const quote = getAllQuotes();
    return (
      <div>
        <h1>List of Quotes</h1>
        {quote.map(quote => (
          <Quote key={quote} quote={quote} />
        ))}
      </div>
    );
  }
}

export default App;
