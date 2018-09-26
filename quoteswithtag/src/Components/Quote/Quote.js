import React, { Component } from "react";
import "./Quote.css";

class Quote extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="center-align card-panel #bbdefb blue lighten-4">
          {this.props.author}
        </h4>
        <hr />
        {this.props.quote.map(q => (
          <blockquote key={q} className="Quote z-depth-1">
            "{q}"
          </blockquote>
        ))}
      </React.Fragment>
    );
  }
}

export default Quote;
