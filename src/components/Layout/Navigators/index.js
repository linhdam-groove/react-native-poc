import React, { useMemo, useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import auth from '@react-native-firebase/auth';

import Login from 'screens/Login';
import Register from 'screens/Register';
import { DrawerContent } from 'screens/DrawerContent';
import { AuthContext } from 'components/Basic/Context';
import BottomTabs from 'components/Layout/BottomTabs';
import RootStack from 'components/Layout/RootStack';
import globalTheme from 'themes';

const Drawer = createDrawerNavigator();

function Navigator() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  const userInfo = useSelector(state => state.login.userInfo);

  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationContainer.colors,
      ...PaperDefaultTheme.colors,
      ...globalTheme.lightTheme,
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      ...globalTheme.darkTheme,
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
          {!isEmpty(userInfo) ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={BottomTabs} />
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="Register" component={Register} />
            </Drawer.Navigator>
          ) : (
            <RootStack />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default Navigator;
