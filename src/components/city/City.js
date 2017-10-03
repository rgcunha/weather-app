import React from 'react';
import CityPropType from '../../lib/PropTypeValues';
import './City.css';

const City = (props) => {
  const {
    name, iconUrl, description, temp, tempMin, tempMax, country,
    wind, clouds, pressure, humidity, sunrise, sunset, coord
  } = props.city;

  return (
    <div className="city">
      <h2>Weather in: {name}, {country}</h2>
      <h2>
        <img src={iconUrl} alt={description} />
        <span>{temp}, {description}</span>
      </h2>
      <table className="city-table">
        <tbody>
          <tr className="city-row">
            <th>Temperature Max</th>
            <td>{tempMax}</td>
          </tr>
          <tr className="city-row">
            <th>Temperature Min</th>
            <td>{tempMin}</td>
          </tr>
          <tr className="city-row">
            <th>Wind</th>
            <td>Speed: {wind.speed}, Direction: {wind.direction} ({wind.deg})</td>
          </tr>
          <tr className="city-row">
            <th>Cloudiness</th>
            <td>{clouds}</td>
          </tr>
          <tr className="city-row">
            <th>Pressure</th>
            <td>{pressure}</td>
          </tr>
          <tr className="city-row">
            <th>Humidity</th>
            <td>{humidity}</td>
          </tr>
          <tr className="city-row">
            <th>Sunrise</th>
            <td>{sunrise}</td>
          </tr>
          <tr className="city-row">
            <th>Sunset</th>
            <td>{sunset}</td>
          </tr>
          <tr className="city-row">
            <th>Geo coords</th>
            <td>[{coord.lon}, {coord.lat}]</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

City.propTypes = {
  city: CityPropType.isRequired
};

export default City;
