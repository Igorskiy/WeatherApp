import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { theme } from 'theme';

import DetailsView from './modules/details';
import MainView from './modules/main';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        barStyle={{
          backgroundColor: theme.colors.orange,
        }}>
        <Tab.Screen
          name="Map"
          component={MainView}
          options={{
            tabBarColor: theme.colors.beige,
            tabBarIcon: ({ color }) => (
              <Icon name="earth" size={23} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={DetailsView}
          options={{
            tabBarColor: theme.colors.orange,
            tabBarIcon: ({ color }) => (
              <Icon name="search1" size={23} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
