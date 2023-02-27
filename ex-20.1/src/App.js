import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    const { value } = this.state;
    if (value + 1 <= 10 && value + 1 >= -10) {
      this.setState({ value: value + 1 });
    }
  }

  decrementHandler() {
    const { value } = this.state;
    if (value - 1 <= 10 && value - 1 >= -10) {
      this.setState({ value: value - 1 });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <button onClick={this.incrementHandler}>Increment</button>
        <div
          style={{
            border: "1px solid black",
            width: "2rem",
            color: value === 0 ? "white" : "black",
            backgroundColor: value < 0 ? "red" : value > 0 ? "green" : "black",
          }}
        >
          {value}
        </div>
        <button onClick={this.decrementHandler}>Decrement</button>
      </div>
    );
  }
}

export default App;
