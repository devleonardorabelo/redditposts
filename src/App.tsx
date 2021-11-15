import React from 'react';
import {View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import New from './screens/New';
import Top from './screens/Top';
import Popular from './screens/Popular';
import Hot from './screens/Hot';
import {Text} from './components';
import THEME from './THEME';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: THEME.textPrimary,
  tabBarInactiveTintColor: THEME.textPrimary,
  tabBarStyle: {
    backgroundColor: THEME.backSecondary,
    borderTopColor: THEME.backSecondary,
  },
  tabBarLabelStyle: {
    fontSize: 1,
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
            tabBarIcon: () => <Text>1</Text>,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="Top"
          component={Top}
          options={{
            tabBarIcon: () => <Text>1</Text>,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
          options={{
            tabBarIcon: () => <Text>1</Text>,
            ...screenOptions,
          }}
        />
        <Tab.Screen
          name="Hot"
          component={Hot}
          options={{
            tabBarIcon: () => <Text>1</Text>,
            ...screenOptions,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
