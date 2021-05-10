import { createPressInAnimation, createPressOutAnimation } from 'animations';
import React, { useState } from 'react';
import { Animated, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

import { theme } from 'theme';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const SearchInput = ({ onPressHandler, inputValue, onValueChangeHandler }) => {
  const [animation] = useState(new Animated.Value(0));

  const pressInAnimation = () => createPressInAnimation(animation).start();
  const pressOutAnimation = () => createPressOutAnimation(animation).start();

  const color = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.orange, theme.colors.tomato],
  });

  const fontSize = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 43],
  });

  const animatedStyle = {
    color,
    fontSize,
  };

  return (
    <SearchInputWrapper>
      <TextEditor
        onChangeText={onValueChangeHandler}
        placeholder="Search Location"
        value={inputValue}
        onSubmitEditing={onPressHandler}
      />
      <IconWrapper
        onPress={onPressHandler}
        onPressIn={pressInAnimation}
        onPressOut={pressOutAnimation}>
        <Text>
          <AnimatedIcon name="search1" style={animatedStyle} />
        </Text>
      </IconWrapper>
    </SearchInputWrapper>
  );
};

const TextEditor = styled.TextInput`
  text-align-vertical: top;
  margin-top: 5%;
  color: ${theme.colors.darkBlue};
  width: 70%;
  font-size: 16px;
  border-color: ${theme.colors.grey};
  border-bottom-width: 2px;
  border-radius: 1px;
`;

const SearchInputWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  position: relative;
`;

const IconWrapper = styled.Pressable`
  position: absolute;
  right: 3%;
  top: 35%;
`;

export default SearchInput;
