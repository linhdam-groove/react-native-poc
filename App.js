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
import Home from 'screens/Home';
import Setting from 'screens/Setting';
import Register from 'screens/Register';
import { DrawerContent } from 'screens/DrawerContent';

import { AuthContext } from 'components/Basic/Context';
import BottomTabs from 'components/Layout/BottomTabs';

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
      background: '#fff',
      backgroundBtn: '#fff',
      icon: '#ddd',
      iconActive: '#0a3d62',
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      primary: '#82ccdd',
      background: '#000',
      backgroundBtn: '#fff',
      icon: '#fff',
      iconActive: '#82ccdd',
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
            <Drawer.Screen name="BottomTabs" component={BottomTabs} />
            <Drawer.Screen name="Login" component={Login} />
            {/* <Drawer.Screen name="Home" component={Home} /> */}
            {/* <Drawer.Screen name="Setting" component={Setting} /> */}
            <Drawer.Screen name="Register" component={Register} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
