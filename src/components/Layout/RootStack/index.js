import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Launch from 'screens/Launch';
import Register from 'screens/Register';
import Login from 'screens/Login';
import Home from 'screens/Home';
import { SCREENS } from 'constants/common';

const Navigator = createStackNavigator();

const RootStack = () => (
  <Navigator.Navigator headerMode="none">
    <Navigator.Screen name={SCREENS.LAUNCH} component={Launch} />
    <Navigator.Screen name={SCREENS.REGISTER} component={Register} />
    <Navigator.Screen name={SCREENS.LOGIN} component={Login} />
  </Navigator.Navigator>
);

export default RootStack;
