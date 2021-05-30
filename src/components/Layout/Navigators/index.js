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
import isEmpty from 'lodash/isEmpty';
import { StatusBar } from 'react-native';

import Login from 'screens/Login';
import Register from 'screens/Register';
import { DrawerContent } from 'screens/DrawerContent';
import { AuthContext } from 'components/Basic/Context';
import BottomTabs from 'components/Layout/BottomTabs';
import RootStack from 'components/Layout/RootStack';
import globalTheme from 'themes';
import { SCREENS } from 'constants/common';

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
        <StatusBar
          barStyle={isDarkTheme ? 'dark-content' : 'light-content'}
          backgroundColor={theme.icon}
        />
        <NavigationContainer theme={theme}>
          {!isEmpty(userInfo) ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name={SCREENS.HOME} component={BottomTabs} />
              <Drawer.Screen name={SCREENS.LOGIN} component={Login} />
              <Drawer.Screen name={SCREENS.REGISTER} component={Register} />
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
