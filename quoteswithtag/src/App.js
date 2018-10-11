import React, { Component } from "react";
import Quote from "./Components/Quote/Quote";
import "./App.css";
import {
  getAllQuotes,
  getAllQuotesWithAuthor,
  getTagsForQuote
} from "./Services/quotesDatabase.js";
class App extends Component {
  render() {
    const quote = getAllQuotes();
    const allQ = getAllQuotesWithAuthor();
    const tag = getTagsForQuote();

    return (
      <div className="container">
        <h1>List of Quotes</h1>
        {quote.map(quote => (
          <Quote
            key={quote}
            quote={quote}
            author={allQ[0][quote]}
            tag={tag[0][quote]}
          />
        ))}
      </div>
    );
  }
}

export default App;
