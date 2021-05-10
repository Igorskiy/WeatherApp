import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import RNLocation from 'react-native-location';
import MapView from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { REGION_BASE, screenHeight, screenWidth } from 'utilities';

import { setWeatherList } from 'store/actions/details';
import {
  getWeatherListFromCoords,
  setCoordinates,
  setInitCoordinates,
  setRegion,
} from 'store/actions/map';
import {
  getCurrentCoordinates,
  getCurrentInitialRegion,
  getCurrentPlace,
  getCurrentWeatherList,
} from 'store/selectors/map';
import { mapStyle } from 'theme';

import CustomMarker from './components/Marker';

const MainView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const currentWeatherList = useSelector(getCurrentWeatherList);
  const currentPlace = useSelector(getCurrentPlace);
  const coordinates = useSelector(getCurrentCoordinates);
  const initialRegion = useSelector(getCurrentInitialRegion);

  const currentWeather = currentWeatherList[0];

  const navigateToDetails = async () => {
    dispatch(setWeatherList({ weatherList: currentWeatherList, currentPlace }));

    navigation.navigate('Search');
  };

  useEffect(() => {
    const getInitCoordinates = async () => {
      try {
        await RNLocation.requestPermission({
          android: {
            detail: 'coarse',
          },
        });

        const deviceLocation = await RNLocation.getLatestLocation({
          timeout: 1000,
        });

        if (deviceLocation) {
          const { longitude, latitude } = deviceLocation;
          dispatch(setInitCoordinates({ longitude, latitude }));

          dispatch(getWeatherListFromCoords(latitude, longitude));
        } else {
          dispatch(setRegion(REGION_BASE));
        }
      } catch (err) {
        console.log(err);
      }
    };

    !initialRegion && getInitCoordinates();
  }, [dispatch, initialRegion]);

  const onPressMarkerHandler = e => {
    const coordinatesData = e.nativeEvent.coordinate;
    const { latitude, longitude } = coordinatesData;

    dispatch(setCoordinates({ latitude, longitude }));
    dispatch(getWeatherListFromCoords(latitude, longitude));
  };
  return (
    <Wrapper>
      <Map
        width={screenWidth}
        height={screenHeight}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
        onLongPress={onPressMarkerHandler}>
        {currentWeather && (
          <CustomMarker
            coordinate={coordinates}
            weather={currentWeather}
            name={currentPlace}
            onCalloutPressHandler={navigateToDetails}
          />
        )}
      </Map>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${props => props.theme.appBackground};
  align-items: center;
  justify-content: center;
`;

const Map = styled(MapView)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export default MainView;
