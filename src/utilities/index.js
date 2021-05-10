import { WEATHER_API_KEY, WEATHER_API_URL } from '@env';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Geocoder from 'react-native-geocoding';

const api = axios.create({
  baseURL: WEATHER_API_URL,
  timeout: 1000,
});

const formatData = rawData => {
  return rawData.daily
    .map(day => ({
      temp: Math.round(day.temp.day),
      dt: day.dt,
    }))
    .filter((_, i) => i < 7);
};

export const getFormattedWeather = async (lat, lon) => {
  try {
    const endpoint = `/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&units=metric&appid=${WEATHER_API_KEY}`;

    const res = await api.get(endpoint);

    const currentPlace = await getDataFromGeocoder(
      { latitude: lat, longitude: lon },
      'address',
    );
    const weather = formatData(res.data);

    return { weather, currentPlace };
  } catch (err) {
    console.log(err);
  }
};

export const getDataFromGeocoder = async (data, dataType = 'coordinates') => {
  try {
    const rawData = await Geocoder.from(data);
    let res;

    if (dataType === 'coordinates') {
      res = rawData.results[0].geometry.location;
    } else {
      res = rawData.results[0].address_components
        .filter(
          a => a.types.includes('locality') || a.types.includes('country'),
        )
        .map(a => a.long_name)
        .join(', ');
      if (!res) {
        res = 'unknown place';
      }
    }

    return res;
  } catch (err) {
    console.log('test', err);

    return dataType === 'coordinates' ? 'unknown temperature' : 'unknown place';
  }
};

export const getCurrTemp = temp => {
  return temp > 0 ? `+${temp}°C` : `${temp}°C`;
};

export const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const formatUnixToWeek = time =>
  WEEK_DAYS[new Date(time * 1000).getDay()];

export const rippleConfig = {
  color: 'black',
  borderless: true,
  radius: 100,
};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const REGION_BASE = {
  longitude: 31.1829,
  latitude: 48.383,
  latitudeDelta: 20,
  longitudeDelta: 20 * (screenWidth / screenHeight),
};
