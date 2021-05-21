/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';

import Login from 'screens/Login';
import Register from 'screens/Register';
import { DrawerContent } from 'screens/DrawerContent';

import { AuthContext } from 'components/Basic/Context';
import BottomTabs from 'components/Layout/BottomTabs';
import Home from 'screens/Home';

const Drawer = createDrawerNavigator();
EStyleSheet.build();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationContainer.colors,
      ...PaperDefaultTheme.colors,
      primary: '#0a3d62',
      headerBg: '#fff',
      background: '#fff',
      backgroundBtn: '#fff',
      labelBtn: '#0a3d62',
      icon: '#ddd',
      iconActive: '#0a3d62',
      iconInActive: '#000',
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: '#fff',
      headerBg: '#000',
      background: '#000',
      backgroundBtn: '#fff',
      labelBtn: '#000',
      icon: '#fff',
      iconActive: '#82ccdd',
      iconInActive: '#fff',
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;
  const authContext = useMemo(
    () => ({
      signOut: () => {},
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={BottomTabs} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
