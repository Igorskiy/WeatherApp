import { getDataFromGeocoder, getFormattedWeather } from 'utilities';

export const GET_WEATHER_FROM_ADDRESS = 'GET_WEATHER_FROM_ADDRESS';
export const CLEAR_WEATHER_LIST = 'CLEAR_WEATHER_LIST';
export const SET_WEATHER_LIST = 'SET_WEATHER_LIST';

export const getWeatherListFromAddress = currentPlace => async dispatch => {
  const { lat, lng } = await getDataFromGeocoder(currentPlace, 'coordinates');

  const { weather } = await getFormattedWeather(lat, lng);

  dispatch({
    type: GET_WEATHER_FROM_ADDRESS,
    payload: { weatherList: weather, currentPlace },
  });
};

export const clearWeatherList = () => ({
  type: CLEAR_WEATHER_LIST,
});

export const setWeatherList = payload => ({
  type: SET_WEATHER_LIST,
  payload,
});
