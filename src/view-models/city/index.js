import { formatTime } from '../../helpers/time'
import { getCardinal } from '../../helpers/compass'

export default class CityViewModel {
  constructor(model) {
    this._model = JSON.parse(JSON.stringify(model));
  }

  get id() {
    return this._model.id;
  }

  get name() {
    return this._model.name;
  }

  get country() {
    return this._model.sys.country;
  }

  get description() {
    return this._model.weather[0].description;
  }

  get iconUrl() {
    return `http://openweathermap.org/img/w/${this._model.weather[0].icon}.png`;
  }

  get temp() {
    return `${Math.round(this._model.main.temp)} °C`;
  }

  get tempMin() {
    return `${Math.round(this._model.main.temp_min)} °C`;
  }

  get tempMax() {
    return `${Math.round(this._model.main.temp_max)} °C`;
  }

  get wind() {
    const { speed, deg } = this._model.wind;
    return {
      speed: `${speed} m/s`,
      deg: deg,
      direction: getCardinal(deg)
    }
  }

  get clouds() {
    return this._model.clouds.all;
  }

  get pressure() {
    return `${this._model.main.pressure} hpa`;
  }

  get humidity() {
    return `${this._model.main.humidity} %`;
  }

  get sunrise() {
    return formatTime(this._model.sys.sunrise);
  }

  get sunset() {
    return formatTime(this._model.sys.sunset);
  }

  get coord() {
    return this._model.coord;
  }
}
