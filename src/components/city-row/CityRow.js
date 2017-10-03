import React from 'react';
import PropTypes from 'prop-types';
import './CityRow.css';

const CityRow = (props) => {
  const { title, description } = props;

  return (
    <tr className="city-row">
      <th>{title}</th>
      <td>{description}</td>
    </tr>
  );
};

CityRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CityRow;
