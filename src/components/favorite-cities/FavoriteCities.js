import React from 'react';
import PropTypes from 'prop-types';
import CityPropType from '../../lib/PropTypeValues';
import Cities from '../cities';

class FavoriteCities extends React.Component {
  componentWillMount() {
    const cityNames = ['Berlin', 'Waltham'];
    this.props.fetchCities(cityNames);
  }

  results() {
    if (this.props.isFetching) {
      return <span>Fetching data...</span>;
    }
    return <Cities cities={this.props.cities} />;
  }

  render() {
    return (
      <div className="favorite-cities">
        { this.results() }
      </div>
    );
  }
}

FavoriteCities.propTypes = {
  cities: PropTypes.arrayOf(CityPropType).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCities: PropTypes.func.isRequired
};

export default FavoriteCities;
