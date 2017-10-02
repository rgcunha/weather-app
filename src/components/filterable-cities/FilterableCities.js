import React from 'react'
import Cities from '../cities'
import SearchBar from '../search-bar'
import { fetchCurrentWeatherSync } from '../../services/weather'

class FilterableCities extends React.Component {
  state = {
    searchText: "",
    cities: []
  };

  updateSearchText = (text) => {
    this.setState(() => ({ searchText: text }));
  };

  searchCities = () => {
    const cities = fetchCurrentWeatherSync([this.state.searchText]);
    this.setState(() => ({ cities: cities }));
  }

  render = () => {
    return (
      <div className='filterable-cities'>
        <SearchBar onSearchTextChange={this.updateSearchText} onSearchClick={this.searchCities} />
        <Cities cities={this.state.cities} />
      </div>
    )
  }
}

export default FilterableCities
