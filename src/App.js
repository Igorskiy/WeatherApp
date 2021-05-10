import { GEOCODER_API_URL } from '@env';
import React from 'react';
import Geocoder from 'react-native-geocoding';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import store from 'store';
import { theme } from 'theme';

import AppRoutes from './AppRoutes';

Geocoder.init(GEOCODER_API_URL);

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppRoutes />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  </SafeAreaProvider>
);

export default App;
