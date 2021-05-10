import { getFormattedWeather, screenHeight, screenWidth } from 'utilities';

export const GET_WEATHER_FROM_COORDS = 'GET_WEATHER_FROM_COORDS';
export const SET_INIT_COORDS = 'SET_INIT_COORDS';
export const SET_COORDS = 'SET_COORDS';
export const SET_REGION = 'SET_REGION';

export const getWeatherListFromCoords = (lat, lon) => async dispatch => {
  const { weather, currentPlace } = await getFormattedWeather(lat, lon);

  dispatch({
    type: GET_WEATHER_FROM_COORDS,
    payload: { weather, currentPlace },
  });
};

export const setInitCoordinates = payload => async dispatch => {
  const { latitude, longitude } = payload;

  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: 5,
    longitudeDelta: 5 * (screenWidth / screenHeight),
  };

  dispatch({
    type: SET_INIT_COORDS,
    payload: { initialRegion, coordinates: { latitude, longitude } },
  });
};

export const setCoordinates = payload => ({
  type: SET_COORDS,
  payload,
});

export const setRegion = payload => ({
  type: SET_REGION,
  payload,
});
