import React from 'react';
import styled from 'styled-components/native';

import WeatherCard from './WeatherCard';

const CardList = ({ weatherList }) => (
  <Wrapper>
    {weatherList &&
      weatherList.map(item => <WeatherCard weather={item} key={item.dt} />)}
  </Wrapper>
);

const Wrapper = styled.ScrollView`
  margin: 0 5%;
  margin-top: 3%;
`;

export default CardList;
