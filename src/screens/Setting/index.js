import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { TouchableRipple, useTheme, Switch } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import StyleCommon from 'themes';
import Language from 'components/Layout/Language';
import { AuthContext } from 'components/Basic/Context';
import { loginActions } from 'screens/Login/slices';
import { authLogout } from 'auth';

function Setting({ navigation }) {
  const dispatch = useDispatch();
  const paperTheme = useTheme();
  const { colors } = paperTheme;
  const { toggleTheme } = useContext(AuthContext);
  const { t } = useTranslation();
  const isFirebase = useSelector(state => state.login.firebase);

  // const [language, setLanguage] = useState('EN');

  // const handleChangeLanguage = () => {
  //   if (i18next.language === 'en') {
  //     i18next.changeLanguage('vi');
  //     setLanguage('VI');
  //   } else {
  //     i18next.changeLanguage('en');
  //     setLanguage('EN');
  //   }
  // };

  const onPressSignOut = text => {
    dispatch(loginActions.resetReducer());
    isFirebase && authLogout(navigation);
    navigation.navigate('Login');
    Alert.alert(text);
  };

  const handleSignOut = () =>
    Alert.alert(t('global.signOut'), t('global.confirmLogout'), [
      {
        text: t('global.no'),
        style: 'no',
      },
      {
        text: t('global.yes'),
        onPress: () => onPressSignOut(t('global.logoutSuccess')),
        style: 'yes',
      },
    ]);

  return (
    <SafeAreaView
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
            <View style={styles.textHasIcon}>
              <IconFeather name="moon" color={colors.primary} size={25} />
              <Text style={[styles.text, { color: colors.primary }]}>
                {t('global.darkTheme')}
              </Text>
            </View>
            <View pointerEvents="none" style={{}}>
              <Switch value={paperTheme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </View>

      <View>
        <View style={styles.preference}>
          <View style={styles.textHasIcon}>
            <Icon name="earth" color={colors.primary} size={25} />
            <Text style={[styles.text, { color: colors.primary }]}>
              {t('global.language')}
            </Text>
          </View>

          <View>
            <Language />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.preference}>
          <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
            <Text style={[styles.signOutText, { color: colors.primary }]}>
              {t('global.signOut')}
            </Text>
            <Icon name="exit-to-app" color={colors.primary} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  theme: {
    fontWeight: 'bold',
    justifyContent: 'center',
    lineHeight: 30,
  },
  textHasIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { marginLeft: 10 },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
