import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import Header from 'components/Layout/Header';
import Setting from 'screens/Setting';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      style={styles.tabNavigator}
      tabBarOptions={{
        activeTintColor: colors.iconActive,
        inactiveTintColor: colors.icon,
        style: {
          backgroundColor: colors.background,
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name={t('global.home')}
        component={Header}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IconIon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t('global.setting')}
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IconIon
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
});

export default BottomTabs;
