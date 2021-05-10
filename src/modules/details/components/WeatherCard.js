import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { formatUnixToWeek, getCurrTemp } from 'utilities';

import { theme } from 'theme';

const WeatherCard = ({ weather }) => {
  const colors = [theme.colors.lightBeige, theme.colors.beige];

  return (
    <Wrapper colors={colors}>
      <Item>{getCurrTemp(weather.temp)}</Item>
      <Divider />
      <Item>{formatUnixToWeek(weather.dt)}</Item>
    </Wrapper>
  );
};

const Wrapper = styled(LinearGradient)`
  flex: 1;
  flex-flow: row;
  height: 150px;
  border: 2px solid ${theme.colors.orange};
  border-radius: 20px;
  margin: 5% 5%;
`;

const Item = styled.Text`
  width: 50%;
  margin: auto;
  text-align: center;
  font-size: 30px;
`;

const Divider = styled.View`
  border: 1px solid ${theme.colors.orange};
  height: 100%;
`;
export default WeatherCard;
