import React from "react";
import Quote from "../Quote/Quote";
import { getQuotesByAuthor, getAllAuthors } from "./quotesHelpers.js";
const ListQuotes = () => {
  return (
    <React.Fragment>
      {getAllAuthors().map(a => (
        <Quote key={a} quote={getQuotesByAuthor(a)} author={a} />
      ))}
    </React.Fragment>
  );
};

export default ListQuotes;
