import React from "react";
import axios from "axios";

export default class CountryList extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      const countries = res.data;
      this.setState({ countries: countries });
    });
  }

  render() {
    return (
      <ul>
        {this.state.countries
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(this.props.filterString.toLowerCase())
          )
          .map((country, index) => (
            <li key={index}>{country.name.official}</li>
          ))}
      </ul>
    );
  }
}
