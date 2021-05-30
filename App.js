/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

import Navigator from 'components/Layout/Navigators';
import store from 'store';

// EStyleSheet.build();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};

export default App;
