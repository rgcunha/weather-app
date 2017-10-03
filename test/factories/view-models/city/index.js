import { Factory } from 'rosie';
import CityViewModel from '../../../../src/view-models/city';
import CityModel from '../../models/city';

export default new Factory(CityViewModel)
  .sequence('id')
  .attr('name', 'Berlin')
  .attr('iconUrl', 'http://openweathermap.org/img/w/10d.png')
  .attr('description', 'Light Rain')
  .attr('temp', '20 °C')
  .attr('tempMin', '10 °C')
  .attr('tempMax', '30 °C')
  .attr('country', 'DE')
  .attr('wind', {
    speed: '10 m/s',
    direction: 'SW (20)',
    deg: 20
  })
  .attr('clouds', '10 %')
  .attr('pressure', '1010 hpa')
  .attr('humidity', '35 %')
  .attr('sunrise', '09:10')
  .attr('sunset', '18:20')
  .attr('coord', {
    lat: 45,
    lon: 48
  })
  .attr('model', CityModel.build());
