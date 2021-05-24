import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from 'screens/Splash';
import Register from 'screens/Register';
import Login from 'screens/Login';

const Navigator = createStackNavigator();

const RootStack = ({ navigation }) => (
  <Navigator.Navigator headerMode="none">
    <Navigator.Screen name="Splash" component={Splash} />
    <Navigator.Screen name="Register" component={Register} />
    <Navigator.Screen name="Login" component={Login} />
  </Navigator.Navigator>
);

export default RootStack;
