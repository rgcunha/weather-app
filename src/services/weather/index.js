import axios from 'axios';
import CityViewModel from '../../view-models/city';

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'c55a3e37688d8ee90fb0e92ca828cbfa';

const samples = [
  { coord: { lon: -0.13, lat: 51.51 }, weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }], base: 'stations', main: { temp: 288.52, pressure: 1016, humidity: 72, temp_min: 287.15, temp_max: 289.15 }, visibility: 10000, wind: { speed: 5.1, deg: 210 }, clouds: { all: 56 }, dt: 1506784800, sys: { type: 1, id: 5091, message: 0.0035, country: 'GB', sunrise: 1506751247, sunset: 1506793124 }, id: 2643743, name: 'London', cod: 200 },
  { coord: { lon: 13.41, lat: 52.52 }, weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }], base: 'stations', main: { temp: 287.15, pressure: 1021, humidity: 87, temp_min: 287.15, temp_max: 287.15 }, visibility: 10000, wind: { speed: 2.6, deg: 210 }, clouds: { all: 75 }, dt: 1506873000, sys: { type: 1, id: 4892, message: 0.0031, country: 'DE', sunrise: 1506834526, sunset: 1506876107 }, id: 2950159, name: 'Berlin', cod: 200 },
  { coord: { lon: -71.24, lat: 42.38 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }], base: 'stations', main: { temp: 289.07, pressure: 1027, humidity: 41, temp_min: 288.15, temp_max: 290.15 }, visibility: 16093, wind: { speed: 3.6, deg: 320 }, clouds: { all: 1 }, dt: 1506874500, sys: { type: 1, id: 1272, message: 0.0543, country: 'US', sunrise: 1506854584, sunset: 1506896688 }, id: 4954380, name: 'Waltham', cod: 200 }
];

const currentWeatherUrl = cityName => `${API_URL}/weather?q=${cityName}&APPID=${API_KEY}&units=metric`;

export const fetchCityWeather = cityName => axios.get(currentWeatherUrl(cityName));

export const fetchCitiesWeather = (cityNames) => {
  const promises = [];
  cityNames.forEach(cityName => promises.push(fetchCityWeather(cityName)));
  return axios.all(promises)
    .then(response => response.map(cityResponse => new CityViewModel(cityResponse.data)));
};

export const fetchCityWeatherSync = (cityName) => {
  const selectedCities = samples.filter(city => cityName === city.name);
  return selectedCities.map(city => new CityViewModel(city));
};

export const fetchCitiesWeatherSync = (cityNames) => {
  const selectedCities = samples.filter(city => cityNames.indexOf(city.name) > -1);
  return selectedCities.map(city => new CityViewModel(city));
};
