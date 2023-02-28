import { Component } from "react";
import CountryList from "./components/CountryList";

class App extends Component {
  state = { filterString: "" };

  setFilterString(e) {
    this.setState({ filterString: e.target.value });
  }

  render() {
    return (
      <div className="App-container">
        <input
          onChange={this.setFilterString.bind(this)}
          type="search"
          placeholder="filter"
        />
        <CountryList filterString={this.state.filterString} />
      </div>
    );
  }
}

export default App;
