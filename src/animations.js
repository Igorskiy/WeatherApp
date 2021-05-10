import { Animated } from 'react-native';

export const createPressInAnimation = animatedValue =>
  Animated.spring(animatedValue, {
    toValue: 1,
    duration: 200,
    useNativeDriver: false,
  });

export const createPressOutAnimation = animatedValue =>
  Animated.spring(animatedValue, {
    toValue: 0,
    duration: 200,
    useNativeDriver: false,
  });
