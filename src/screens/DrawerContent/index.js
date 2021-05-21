import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

import { AuthContext } from 'components/Context';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const { colors } = paperTheme;
  const { t, i18n } = useTranslation();
  const { signOut, toggleTheme } = useContext(AuthContext);

  const options = [
    { label: 'Vi', value: 'vi' },
    { label: 'En', value: 'en' },
  ];

  return (
    <View
      style={[styles.drawerContent, { backgroundColor: colors.background }]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.info}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Test</Title>
                <Caption style={styles.caption}>@test</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Login"
              onPress={() => {
                props.navigation.navigate('Login');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Register"
              onPress={() => {
                props.navigation.navigate('Register');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <View style={styles.preference}>
              <Text>Language</Text>

              {/* <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              /> */}
              <SwitchSelector
                options={options}
                initial={0}
                onPress={language => {
                  i18n.changeLanguage(language);
                }}
              />
            </View>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="SIGN OUT"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  info: { flexDirection: 'row', marginTop: 15 },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    marginBottom: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
