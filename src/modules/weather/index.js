// import axios from 'axios'

export const FETCH_CITIES = 'weather/FETCH_CITIES'
export const FETCH_CITY   = 'weather/FETCH_CITY'

const API_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = 'c55a3e37688d8ee90fb0e92ca828cbfa';

const initialState = {
  cities: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: state.cities.concat(action.payload)
      }

    case FETCH_CITY:
      return {
        ...state,
        cities: state.cities.concat(action.payload)
      }

    default:
      return state
  }
}

export const fetchCities = () => {
  var cities = [
    {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":288.52,"pressure":1016,"humidity":72,"temp_min":287.15,"temp_max":289.15},"visibility":10000,"wind":{"speed":5.1,"deg":210},"clouds":{"all":56},"dt":1506784800,"sys":{"type":1,"id":5091,"message":0.0035,"country":"GB","sunrise":1506751247,"sunset":1506793124},"id":2643743,"name":"London","cod":200},
    {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":288.52,"pressure":1016,"humidity":72,"temp_min":287.15,"temp_max":289.15},"visibility":10000,"wind":{"speed":5.1,"deg":210},"clouds":{"all":56},"dt":1506784800,"sys":{"type":1,"id":5091,"message":0.0035,"country":"GB","sunrise":1506751247,"sunset":1506793124},"id":2643744,"name":"Berlin","cod":200}
  ]

  debugger;

  return dispatch => {
    dispatch({
      type: FETCH_CITIES,
      payload: cities
    })
  }
}

// export const fetchCity = (cityName) => {
//   return dispatch => {
//     axios.get(`${API_URL}/weather?q=${cityName}&APPID=${API_KEY}`)
//     .then(response => {
//       dispatch({
//         type: FETCH_CITY,
//         payload: response.data.data
//       })
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }
// }
