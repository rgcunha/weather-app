import { fetchCurrentWeather, fetchCurrentWeatherSync } from '../../services/weather'

export const FETCH_CITIES_REQUEST = 'weather/FETCH_CITIES_REQUEST'
export const FETCH_CITIES_SUCCESS = 'weather/FETCH_CITIES_SUCCESS'
export const FETCH_CITIES_ERROR   = 'weather/FETCH_CITIES_ERROR'
export const FETCH_CITIES_SYNC    = 'weather/FETCH_CITIES_SYNC'

// State
const initialState = {
  cities: []
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        cities: state.cities
      }

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: state.cities.concat(action.payload)
      }

    case FETCH_CITIES_ERROR:
      return {
        ...state,
        cities: state.cities
      }

    case FETCH_CITIES_SYNC:
      return {
        ...state,
        cities: state.cities.concat(action.payload)
      }

    default:
      return state
  }
}

// Action Creators
export const fetchCities = (cityNames) => {
  return dispatch => {
    dispatch(fetchCitiesRequestAction());
    fetchCurrentWeather(cityNames)
      .then(cities => dispatch(fetchCitiesSuccessAction(cities)))
      .catch((error) => {
        dispatch(fetchCitiesErrorAction());
        console.log(error);
      })
  }
}

export const fetchCitiesSync = (cityNames) => {
  let cities = fetchCurrentWeatherSync(cityNames);
  return dispatch => {
    dispatch(fetchCitiesSyncAction(cities))
  }
}

// Actions
const fetchCitiesRequestAction = () => {
  return {
    type: FETCH_CITIES_REQUEST
  }
}

const fetchCitiesSuccessAction = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities
  }
}

const fetchCitiesErrorAction = () => {
  return {
    type: FETCH_CITIES_ERROR
  }
}

const fetchCitiesSyncAction = (cities) => {
  return {
    type: FETCH_CITIES_SYNC,
    payload: cities
  }
}
