import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CityPropType from '../../lib/PropTypeValues';
import City from '../city';
import './Cities.css';

const Cities = (props) => {
  const listCities = cities => cities.map(city =>
    (
      <Col key={city.id} sm={12} md={6}>
        <City key={city.id} city={city} />
      </Col>
    )
  );
  return (
    <div className="cities">
      <Row>
        {listCities(props.cities)}
      </Row>
    </div>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(CityPropType).isRequired
};

export default Cities;
