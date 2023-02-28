import "../styles/Box.css";
import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showBox: true });
    }, 1000);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ showBox: false });
    }, 4000);
  }

  render() {
    return this.state.showBox ? (
      <div
        className="Box"
        style={{ width: this.props.width, height: this.props.height }}
      ></div>
    ) : (
      <div></div>
    );
  }
}

export default Box;
