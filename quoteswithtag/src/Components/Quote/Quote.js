import React, { Component } from "react";
import "./Quote.css";
class Quote extends Component {
  render() {
    return <p className="Quote">{this.props.quote}</p>;
  }
}

export default Quote;
