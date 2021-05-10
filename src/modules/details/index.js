import { useIsFocused } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import CardList from 'modules/details/components/CardList';
import SearchInput from 'modules/details/components/SearchInput';
import {
  clearWeatherList,
  getWeatherListFromAddress,
} from 'store/actions/details';
import { getCurrentPlace, getWeatherList } from 'store/selectors/details';
import { theme } from 'theme';

const DetailsView = () => {
  const weatherList = useSelector(getWeatherList);
  const currentPlace = useSelector(getCurrentPlace);
  const [inputValue, setInputValue] = useState(currentPlace);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(currentPlace);
  }, [currentPlace]);

  useEffect(() => {
    !isFocused && dispatch(clearWeatherList());
  }, [isFocused, dispatch]);

  const onValueChangeHandler = value => setInputValue(value);

  const onPressHandler = async () => {
    if (inputValue) {
      setIsLoading(true);

      await dispatch(getWeatherListFromAddress(inputValue));

      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <SearchInput
        onPressHandler={onPressHandler}
        onValueChangeHandler={onValueChangeHandler}
        inputValue={inputValue}
      />
      {isLoading ? (
        <Spinner size="large" color={theme.colors.orange} />
      ) : (
        <CardList weatherList={weatherList} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.appBackground};
`;

const Spinner = styled.ActivityIndicator`
  flex: 1
  align-items: center;
  justify-content: center;

`;
export default DetailsView;
