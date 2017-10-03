import React from 'react';
import PropTypes from 'prop-types';
import CityPropType from '../../lib/PropTypeValues';
import City from '../city';
import './Cities.css';

const Cities = (props) => {
  const listCities = cities => cities.map(city =>
    <City key={city.id} city={city} />,
  );
  return (
    <div className="cities">
      {listCities(props.cities)}
    </div>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(CityPropType).isRequired
};

export default Cities;
