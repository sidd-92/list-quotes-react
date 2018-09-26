let quotes = require("../../QuoteAuthors.json");

function getQuotesByAuthor(author) {
  let index = 0;
  let allQ = quotes.map((q, i) => {
    if (author === q.Author) {
      index = i;
      return q.Quote;
    }
    return null;
  });

  return allQ[index];
}

function getAllAuthors() {
  const listOfAuthors = quotes.map(q => q.Author);
  return listOfAuthors;
}

export { getQuotesByAuthor, getAllAuthors };
