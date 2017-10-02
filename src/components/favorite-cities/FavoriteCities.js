import React from 'react'
import PropTypes from 'prop-types'
import Cities from '../cities'

class FavoriteCities extends React.Component {
  componentWillMount = () => {
    const cityNames = ["Berlin", "Waltham"];
    this.props.fetchCities(cityNames);
  }

  render = () => {
    return (
      <div className='favourite-cities'>
        <Cities cities={this.props.cities} />
      </div>
    )
  }
}

FavoriteCities.propTypes = {
  cities      : PropTypes.array.isRequired,
  fetchCities : PropTypes.func.isRequired
}

export default FavoriteCities
