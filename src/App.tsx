import React from 'react';
import {Image, View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import New from './screens/New';
import Top from './screens/Top';
import Popular from './screens/Popular';
import Hot from './screens/Hot';
import {Icon} from './components';
import THEME from './theme';
import IMAGES from './assets';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: THEME.textPrimary,
  tabBarInactiveTintColor: THEME.textPrimary,
  tabBarStyle: {
    backgroundColor: THEME.backSecondary,
    borderTopColor: THEME.backSecondary,
  },
  tabBarLabelStyle: {
    display: 'none',
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="New"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="New"
          component={New}
          options={{
            tabBarIcon: () => <Icon source={IMAGES.new} />,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="Top"
          component={Top}
          options={{
            tabBarIcon: () => <Icon source={IMAGES.top} />,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
          options={{
            tabBarIcon: () => <Icon source={IMAGES.popular} />,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="Hot"
          component={Hot}
          options={{
            tabBarIcon: () => <Icon source={IMAGES.hot} />,
            ...screenOptions,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
