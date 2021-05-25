import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TouchableRipple, useTheme, Switch } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StyleCommon from 'theme/StyleCommon';
import { AuthContext } from 'components/Basic/Context';

function Setting() {
  const paperTheme = useTheme();
  const { colors } = paperTheme;
  const { toggleTheme } = useContext(AuthContext);
  const { t } = useTranslation();

  const [language, setLanguage] = useState('EN');

  const handleChangeLanguage = () => {
    if (i18next.language === 'en') {
      i18next.changeLanguage('vi');
      setLanguage('VI');
    } else {
      i18next.changeLanguage('en');
      setLanguage('EN');
    }
  };

  const handleSignOut = () =>
    Alert.alert(t('global.signOut'), 'Are you sure want to log out', [
      {
        text: t('global.yes'),
        style: 'yes',
      },
      {
        text: t('global.no'),
        onPress: () => Alert.alert('Logout successfully'),
        style: 'no',
      },
    ]);

  return (
    <View
      style={[
        StyleCommon.container,
        styles.wrapper,
        {
          paddingTop: 50,
          backgroundColor: colors.background,
          color: colors.text,
        },
      ]}>
      <View>
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}>
          <View style={styles.preference}>
            <Text style={[styles.theme, { color: colors.primary }]}>
              {t('global.darkTheme')}
            </Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </View>
      <View>
        <View style={styles.preference}>
          <Text style={[styles.theme, { color: colors.primary }]}>
            {t('global.language')}
          </Text>
          <TouchableOpacity onPress={() => handleChangeLanguage()}>
            <Text
              style={[
                styles.btn,
                {
                  color: colors.labelBtn,
                  backgroundColor: colors.backgroundBtn,
                },
              ]}>
              {language}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.preference}>
          <TouchableOpacity
            style={styles.signOut}
            onPress={() => handleSignOut()}>
            <Text style={[styles.signOutText, { color: colors.primary }]}>
              {t('global.signOut')}
            </Text>
            <Icon name="exit-to-app" color={colors.primary} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  theme: {
    fontWeight: 'bold',
    justifyContent: 'center',
    lineHeight: 30,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btn: {
    lineHeight: 30,
    fontWeight: 'bold',
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  signOutText: {
    marginRight: 10,
  },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Setting;
