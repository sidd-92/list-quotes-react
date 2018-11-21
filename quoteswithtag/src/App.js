import React, { Component } from "react";
import Quote from "./Components/Quote/Quote";
import "./App.css";
import {
	getInformationByQuote,
	getAllQuotes
} from "./Services/quotesDatabase.js";
class App extends Component {
	render() {
		let quote = getAllQuotes();
		return (
			<div className='container'>
				<h1>List of Quotes</h1>
				{quote.map((q) => (
					<Quote
						quote={q}
						author={getInformationByQuote(q)[q].a}
						tag={getInformationByQuote(q)[q].t}
						category={getInformationByQuote(q)[q].c}
					/>
				))}
			</div>
		);
	}
}

export default App;
