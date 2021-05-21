import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

// import Home from 'screens/Home';
// import Setting from 'screens/Setting';
import Register from 'screens/Register';
import Login from 'screens/Login';

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
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
      {/* <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    fontWeight: 'bold',
  },
});

export default BottomTabs;
