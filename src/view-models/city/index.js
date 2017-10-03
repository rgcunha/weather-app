import formatTime from '../../helpers/time';
import getCardinal from '../../helpers/compass';

export default class CityViewModel {
  constructor(model) {
    this.model = JSON.parse(JSON.stringify(model));
  }

  get id() {
    return this.model.id;
  }

  get name() {
    return this.model.name;
  }

  get country() {
    return this.model.sys.country;
  }

  get description() {
    return this.model.weather[0].description;
  }

  get iconUrl() {
    return `http://openweathermap.org/img/w/${this.model.weather[0].icon}.png`;
  }

  get temp() {
    return `${Math.round(this.model.main.temp)} °C`;
  }

  get tempMin() {
    return `${Math.round(this.model.main.temp_min)} °C`;
  }

  get tempMax() {
    return `${Math.round(this.model.main.temp_max)} °C`;
  }

  get wind() {
    const { speed, deg } = this.model.wind;
    return {
      speed: `${speed} m/s`,
      deg,
      direction: getCardinal(deg)
    };
  }

  get clouds() {
    return `${this.model.clouds.all} %`;
  }

  get pressure() {
    return `${this.model.main.pressure} hpa`;
  }

  get humidity() {
    return `${this.model.main.humidity} %`;
  }

  get sunrise() {
    return formatTime(this.model.sys.sunrise);
  }

  get sunset() {
    return formatTime(this.model.sys.sunset);
  }

  get coord() {
    return this.model.coord;
  }

  get lastReceivedDate() {
    return formatTime(this.model.dt);
  }
}
