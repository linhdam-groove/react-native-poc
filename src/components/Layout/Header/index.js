import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import IconsMt from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

import Home from 'screens/Home';
import Setting from 'screens/Setting';
import { SCREENS } from 'constants/common';

import logo from 'assets/imgs/logo.png';

const Stack = createStackNavigator();

function Header({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.headerBg },
        headerLeft: props => (
          <IconsMt
            name={'menu'}
            size={30}
            color={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: () => <Image source={logo} style={styles.logo} />,
        headerLeftContainerStyle: { paddingHorizontal: 15 },
      }}
      style={styles.header}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{ title: t('global.home') }}
      />
      <Stack.Screen
        name={SCREENS.SETTING}
        component={Setting}
        options={{ title: t('global.setting') }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    resizeMode: 'center',
  },
});

export default Header;
