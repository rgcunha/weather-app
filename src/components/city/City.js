import React from 'react';
import CityPropType from '../../lib/PropTypeValues';
import CityRow from '../city-row';
import './City.css';

const City = (props) => {
  const {
    name, iconUrl, description, temp, tempMin, tempMax, country,
    wind, clouds, pressure, humidity, sunrise, sunset, coord, lastReceivedDate
  } = props.city;

  const rowsData = [
    { title: 'Max', description: tempMax },
    { title: 'Min', description: tempMin },
    { title: 'Wind', description: `Speed: ${wind.speed}, Direction: ${wind.direction} (${wind.deg})` },
    { title: 'Cloudiness', description: clouds },
    { title: 'Pressure', description: pressure },
    { title: 'Humidity', description: humidity },
    { title: 'Sunrise', description: sunrise },
    { title: 'Sunset', description: sunset },
    { title: 'Geo coords', description: `[${coord.lon}, ${coord.lat}]` }
  ];

  const listRows = rows => rows.map(row =>
    <CityRow key={row.title} title={row.title} description={row.description} />
  );
  return (
    <div className="city">
      <h2 className="city-title">
        Weather in: {name}, {country}
      </h2>
      <h2 className="city-weather">
        <img src={iconUrl} alt={description} />
        <span>{temp}, {description}</span>
      </h2>
      <table className="table table-striped city-table">
        <tbody>
          {listRows(rowsData)}
        </tbody>
      </table>
      <span>Last data received on: {lastReceivedDate}</span>
    </div>
  );
};

City.propTypes = {
  city: CityPropType.isRequired
};

export default City;
