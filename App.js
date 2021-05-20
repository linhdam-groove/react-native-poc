/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from 'react-native';
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

import Login from 'screens/Login';
import { AuthContext } from 'components/Context';
import { DrawerContent } from 'screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  const scheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationContainer.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#000',
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#000',
      text: '#fff',
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;
  const authContext = useMemo(
    () => ({
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
            <Drawer.Screen name="Login" component={Login} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
