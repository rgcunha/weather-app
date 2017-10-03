import PropTypes from 'prop-types';

const CityPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  tempMin: PropTypes.string.isRequired,
  tempMax: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    deg: PropTypes.string.number
  }),
  clouds: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  coord: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  })
});

export default CityPropType;
