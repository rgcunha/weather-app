import React from 'react'
import PropTypes from 'prop-types'
import City from '../city'
import './Cities.css'

class Cities extends React.Component {

  componentWillMount = () => {
    const cityNames = ["Berlin", "Waltham"];
    this.props.fetchCities(cityNames);
  }

  listCities = (cities) => {
    return cities.map((city) =>
      <City key={city.id} city={city} />
    )
  };

  render = () => {
    return (
      <div className='cities'>
        {this.listCities(this.props.cities)}
      </div>
    )
  }
}

Cities.propTypes = {
  cities      : PropTypes.array.isRequired,
  fetchCities : PropTypes.func.isRequired
}

export default Cities
