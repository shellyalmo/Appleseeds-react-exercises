import React, { Component } from "react";

class TimeConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    this.handleChangeSeconds = this.handleChangeSeconds.bind(this);
    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
  }

  handleChangeSeconds(event) {
    const seconds = parseInt(event.target.value, 10);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });
  }

  handleChangeMinutes(event) {
    const minutes = parseInt(event.target.value, 10);
    const seconds = minutes * 60;
    const hours = Math.floor(minutes / 60);
    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });
  }

  handleChangeHours(event) {
    const hours = parseInt(event.target.value, 10);
    const minutes = hours * 60;
    const seconds = minutes * 60;
    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });
  }

  render() {
    const { seconds, minutes, hours } = this.state;
    return (
      <div>
        <div>
          <label>
            Seconds:
            <input
              type="number"
              value={seconds}
              onChange={this.handleChangeSeconds}
            />
          </label>
        </div>
        <div>
          <label>
            Minutes:
            <input
              type="number"
              value={minutes}
              onChange={this.handleChangeMinutes}
            />
          </label>
        </div>
        <div>
          <label>
            Hours:
            <input
              type="number"
              value={hours}
              onChange={this.handleChangeHours}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default TimeConverter;
