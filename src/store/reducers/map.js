import {
  GET_WEATHER_FROM_COORDS,
  SET_COORDS,
  SET_INIT_COORDS,
  SET_REGION,
} from 'store/actions/map';

const initialState = {
  weatherList: {},
  currentPlace: null,
  coordinates: null,
  initialRegion: null,
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_FROM_COORDS: {
      const { weather, currentPlace } = action.payload;
      return {
        ...state,
        weatherList: weather,
        currentPlace,
      };
    }
    case SET_COORDS: {
      const coordinates = action.payload;
      return {
        ...state,
        coordinates,
      };
    }
    case SET_INIT_COORDS: {
      const { coordinates, initialRegion } = action.payload;
      return {
        ...state,
        coordinates,
        initialRegion,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        initialRegion: action.payload,
      };
    }
    default:
      return state;
  }
};
