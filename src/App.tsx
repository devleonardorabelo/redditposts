import React from 'react';
import {Image, View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';

import New from './screens/New';
import Top from './screens/Top';
import Popular from './screens/Popular';
import Hot from './screens/Hot';
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

const teste = {
  history: [
    {key: 'New-MnWD9-4TLhHpDjcrFvBP0', type: 'route'},
    {key: 'Popular-4QXmpAMsR1Dib_w1N8XsD', type: 'route'},
  ],
  index: 2,
  key: 'tab-zaoiPWp-9QSwHfcgr4a9c',
  routeNames: ['New', 'Top', 'Popular', 'Hot'],
  routes: [
    {key: 'New-MnWD9-4TLhHpDjcrFvBP0', name: 'New', params: undefined},
    {key: 'Top-45j-vUIiDnHD0mJLi5gJC', name: 'Top', params: undefined},
    {key: 'Popular-4QXmpAMsR1Dib_w1N8XsD', name: 'Popular', params: undefined},
    {key: 'Hot-tLAsv0-ko7Bm1ggJLEgnN', name: 'Hot', params: undefined},
  ],
  stale: false,
  type: 'tab',
};

const teste2 = {
  history: [
    {key: 'New-MnWD9-4TLhHpDjcrFvBP0', type: 'route'},
    {key: 'Hot-tLAsv0-ko7Bm1ggJLEgnN', type: 'route'},
  ],
  index: 3,
  key: 'tab-zaoiPWp-9QSwHfcgr4a9c',
  routeNames: ['New', 'Top', 'Popular', 'Hot'],
  routes: [
    {key: 'New-MnWD9-4TLhHpDjcrFvBP0', name: 'New', params: undefined},
    {key: 'Top-45j-vUIiDnHD0mJLi5gJC', name: 'Top', params: undefined},
    {key: 'Popular-4QXmpAMsR1Dib_w1N8XsD', name: 'Popular', params: undefined},
    {key: 'Hot-tLAsv0-ko7Bm1ggJLEgnN', name: 'Hot', params: undefined},
  ],
  stale: false,
  type: 'tab',
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
