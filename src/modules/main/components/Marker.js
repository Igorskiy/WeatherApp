import OrangeMarker from 'assets/images/map-marker.png';
import React, { useEffect, useRef } from 'react';
import { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { getCurrTemp, rippleConfig, screenWidth } from 'utilities';

const CustomMarker = ({ coordinate, weather, onCalloutPressHandler, name }) => {
  const markerRef = useRef();

  useEffect(() => {
    markerRef &&
      markerRef.current &&
      markerRef.current.hideCallout &&
      markerRef.current.hideCallout();
  }, [coordinate]);

  return (
    <Marker
      ref={markerRef}
      key={weather.dt}
      coordinate={coordinate}
      icon={OrangeMarker}>
      <Callout onPress={onCalloutPressHandler} tooltip>
        <CustomCallout android_ripple={rippleConfig}>
          <Address>{name}</Address>
          <Temp>{getCurrTemp(weather.temp)}</Temp>
        </CustomCallout>
      </Callout>
    </Marker>
  );
};

const CustomCallout = styled.Pressable`
  position: relative;
  margin-bottom: 10px;
  flex: 1;
  width: ${screenWidth * 0.5}px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.lightBeigeTrans};
  border-radius: 10px;
`;

const Address = styled.Text`
  text-align: center;
  border-color: ${({ theme }) => theme.colors.orange};
  border-bottom-width: 1px;
  padding: 5px 10px;
`;

const Temp = styled.Text`
  text-align: center;
  padding: 5px 10px;
`;

export default CustomMarker;
