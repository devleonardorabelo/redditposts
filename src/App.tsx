import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import New from './screens/views/New';
import Top from './screens/views/Top';
import Popular from './screens/views/Popular';
import Hot from './screens/views/Hot';

import {Icon} from './components';
import THEME from './theme';
import IMAGES from './assets';
import {RedditProvider} from './context';

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
      <RedditProvider>
        <Tab.Navigator
          initialRouteName="New"
          screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="New"
            component={New}
            options={({navigation}) => {
              return {
                tabBarIcon: () => (
                  <Icon
                    source={
                      navigation.getState().index === 0
                        ? IMAGES.active.new
                        : IMAGES.inactive.new
                    }
                  />
                ),

                ...screenOptions,
              };
            }}
          />
          <Tab.Screen
            name="Top"
            component={Top}
            options={({navigation}) => {
              return {
                tabBarIcon: () => (
                  <Icon
                    source={
                      navigation.getState().index === 1
                        ? IMAGES.active.top
                        : IMAGES.inactive.top
                    }
                  />
                ),
                ...screenOptions,
              };
            }}
          />
          <Tab.Screen
            name="Popular"
            component={Popular}
            options={({navigation}) => {
              return {
                tabBarIcon: () => (
                  <Icon
                    source={
                      navigation.getState().index === 2
                        ? IMAGES.active.popular
                        : IMAGES.inactive.popular
                    }
                  />
                ),
                ...screenOptions,
              };
            }}
          />
          <Tab.Screen
            name="Hot"
            component={Hot}
            options={({navigation}) => {
              return {
                tabBarIcon: () => (
                  <Icon
                    source={
                      navigation.getState().index === 3
                        ? IMAGES.active.hot
                        : IMAGES.inactive.hot
                    }
                  />
                ),
                ...screenOptions,
              };
            }}
          />
        </Tab.Navigator>
      </RedditProvider>
    </NavigationContainer>
  );
};

export default App;
