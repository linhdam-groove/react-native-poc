import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import IconsMt from 'react-native-vector-icons/MaterialIcons';

import Home from 'screens/Home';
import Setting from 'screens/Setting';

import logo from 'assets/imgs/logo.png';

const Stack = createStackNavigator();

function Header({ navigation }) {
  const { colors } = useTheme();

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
            color={colors.iconInActive}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: () => <Image source={logo} style={styles.logo} />,
        headerLeftContainerStyle: { paddingHorizontal: 15 },
      }}
      style={styles.header}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ title: 'Setting' }}
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
