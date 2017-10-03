import React from 'react';
import Cities from '../cities';
import SearchBar from '../search-bar';
import { fetchCurrentWeather } from '../../services/weather';

class FilterableCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      cities: []
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.searchCities = this.searchCities.bind(this);
  }

  updateSearchText(text) {
    this.setState(() => ({ searchText: text }));
  }

  searchCities() {
    fetchCurrentWeather([this.state.searchText])
      .then(cities => this.setState({ cities }));

    // Sync
    // const cities = fetchCurrentWeatherSync([this.state.searchText])
  }

  render() {
    return (
      <div className="filterable-cities">
        <SearchBar onSearchTextChange={this.updateSearchText} onSearchClick={this.searchCities} />
        <Cities cities={this.state.cities} />
      </div>
    );
  }
}

export default FilterableCities;
