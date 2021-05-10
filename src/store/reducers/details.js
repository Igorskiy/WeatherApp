import {
  CLEAR_WEATHER_LIST,
  GET_WEATHER_FROM_ADDRESS,
  SET_WEATHER_LIST,
} from 'store/actions/details';

const initialState = {
  weatherList: [],
  currentPlace: '',
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_FROM_ADDRESS: {
      const { weatherList, currentPlace } = action.payload;
      return {
        ...state,
        weatherList,
        currentPlace,
      };
    }
    case SET_WEATHER_LIST: {
      const { weatherList, currentPlace } = action.payload;

      return {
        ...state,
        weatherList,
        currentPlace,
      };
    }
    case CLEAR_WEATHER_LIST:
      return initialState;
    default:
      return state;
  }
};
