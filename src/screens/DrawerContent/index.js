import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
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
import { useSelector, useDispatch } from 'react-redux';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import { loginActions } from 'screens/Login/slices';
import { AuthContext } from 'components/Basic/Context';
import { authLogout } from 'auth';
import { SCREENS } from 'constants/common';

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const paperTheme = useTheme();
  const { colors } = paperTheme;
  const { t } = useTranslation();
  const { toggleTheme } = useContext(AuthContext);
  const { navigation } = props;
  const isFirebase = useSelector(state => state.login.firebase);

  const handleSignOut = () => {
    dispatch(loginActions.resetReducer());
    isFirebase && authLogout(navigation);
    navigation.navigate('Login');
  };

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
                <Icon name="home" color={colors.primary} size={size} />
              )}
              label={() => (
                <Text style={{ color: colors.primary }}>
                  {t('global.home')}
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate(SCREENS.HOME);
              }}
              style={{ color: colors.primary }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IconIon
                  name="ios-settings-sharp"
                  color={colors.primary}
                  size={size}
                />
              )}
              label={() => (
                <Text style={{ color: colors.primary }}>
                  {t('global.setting')}
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate(SCREENS.SETTING);
              }}
            />
          </Drawer.Section>

          <Drawer.Section title={t('global.preferences')}>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={[styles.preference, { alignItems: 'center' }]}>
                <Text style={{ color: colors.primary }}>
                  {t('global.darkTheme')}
                </Text>
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
          label={t('global.signOut')}
          onPress={() => handleSignOut()}
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
