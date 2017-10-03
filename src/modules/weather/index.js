import { fetchCitiesWeather, fetchCitiesWeatherSync } from '../../services/weather';

export const FETCH_CITIES_REQUEST = 'weather/FETCH_CITIES_REQUEST';
export const FETCH_CITIES_SUCCESS = 'weather/FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_ERROR = 'weather/FETCH_CITIES_ERROR';
export const FETCH_CITIES_SYNC = 'weather/FETCH_CITIES_SYNC';

// State
const initialState = {
  cities: []
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return state;

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload
      };

    case FETCH_CITIES_ERROR:
      return state;

    case FETCH_CITIES_SYNC:
      return {
        ...state,
        cities: action.payload
      };

    default:
      return state;
  }
};

// Actions
const fetchCitiesRequestAction = () => ({
  type: FETCH_CITIES_REQUEST
});

const fetchCitiesSuccessAction = cities => ({
  type: FETCH_CITIES_SUCCESS,
  payload: cities
});

const fetchCitiesErrorAction = () => ({
  type: FETCH_CITIES_ERROR
});

const fetchCitiesSyncAction = cities => ({
  type: FETCH_CITIES_SYNC,
  payload: cities
});

// Action Creators
export const fetchCities = cityNames => (dispatch) => {
  dispatch(fetchCitiesRequestAction());
  fetchCitiesWeather(cityNames)
    .then(cities => dispatch(fetchCitiesSuccessAction(cities)))
    .catch((error) => {
      console.log(error);
      dispatch(fetchCitiesErrorAction());
    });
};

export const fetchCitiesSync = (cityNames) => {
  const cities = fetchCitiesWeatherSync(cityNames);
  return (dispatch) => {
    dispatch(fetchCitiesSyncAction(cities));
  };
};
