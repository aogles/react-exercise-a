import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import React from "react";

class blogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log("you submitteda blog post!" + this.state.value);
    event.preventDefault();
  }

  render(handleChange, handleSubmit) {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Blog Post:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default blogForm;
