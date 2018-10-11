import React, { Component } from "react";
import "./Quote.css";
class Quote extends Component {
  render() {
    console.log(this.props.tag);
    return (
      <div className="card my-2">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{this.props.quote}</p>
            <footer className="blockquote-footer">{this.props.author}</footer>
          </blockquote>
        </div>
        <div className="card-footer d-inline-flex">
          Tagged As:
          {this.props.tag.map(t => (
            <span key={t} className="badge badge-secondary ml-2">
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Quote;
