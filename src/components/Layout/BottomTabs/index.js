import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

import Home from 'screens/Home';
import Header from 'components/Layout/Header';
import Setting from 'screens/Setting';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      style={styles.tabNavigator}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'ios-settings-sharp';
          }

          // You can return any component that you like here!
          return <IconIon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.iconActive,
        inactiveTintColor: colors.icon,
      }}>
      <Tab.Screen name="Home" component={Header} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    fontWeight: 'bold',
  },
});

export default BottomTabs;
