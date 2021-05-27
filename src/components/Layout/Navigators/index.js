import React, { useMemo, useState } from 'react';
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
          {userInfo ? (
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
