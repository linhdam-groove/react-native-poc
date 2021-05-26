import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';

import { loginActions } from './slices';

import TextInput from 'components/Basic/TextInput';
import StyleCommon from 'themes';

// import logo from 'assets/imgs/logo.png';

function Login({ navigation }) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const userInfo = useSelector(state => state.login.userInfo);

  console.log('userInfo', userInfo);

  useEffect(() => {
    dispatch(loginActions.login({ name: 'test', email: 'test@gmail.com' }));
  }, [dispatch]);

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View
      style={[
        StyleCommon.container,
        StyleCommon.centerContent,
        styles.wrapper,
        { backgroundColor: colors.background, color: colors.text },
      ]}>
      <Text style={[styles.title, { color: colors.primary }]}>
        {t('login.signIn')}
        {/* <Image source={logo} style={styles.logo} /> */}
      </Text>
      <View style={[StyleCommon.wrapperInputIcon, styles.wrapperInput]}>
        <IconAntDesign
          color={colors.primary}
          name="user"
          size={20}
          style={StyleCommon.iconInput}
        />
        <TextInput style={StyleCommon.inputIcon} />
      </View>
      <View style={[StyleCommon.wrapperInputIcon, styles.wrapperInput]}>
        <IconAntDesign
          color={colors.primary}
          name="unlock"
          size={20}
          style={StyleCommon.iconInput}
        />
        <TextInput style={StyleCommon.inputIcon} />
        <IconAntDesign
          color={colors.primary}
          name="eye"
          size={20}
          style={StyleCommon.iconInput}
        />
      </View>
      <Text style={[styles.forgot, { color: colors.primary }]}>
        {t('login.forgotPsw')}
      </Text>
      <TouchableOpacity activeOpacity={0.8} style={[styles.btn]}>
        <Text
          style={[
            StyleCommon.button,
            StyleCommon.fullWidth,
            {
              color: colors.labelBtn,
              backgroundColor: colors.backgroundBtn,
            },
          ]}
          onPress={() => handleSignIn()}>
          {t('login.signIn')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.createAcc, { color: colors.primary }]}>
        <Text style={{ color: colors.primary }}>{t('login.haveAccount')}</Text>
        <Text style={[styles.createNew, { color: colors.primary }]}>
          {' '}
          {t('login.createAccount')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textTransform: 'uppercase',
  },
  wrapperInput: {
    marginBottom: 20,
  },
  forgot: {
    width: '100%',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  btn: {
    alignItems: 'center',
    width: '100%',
  },
  createAcc: {
    flexDirection: 'row',
    marginTop: 30,
  },
  createNew: {
    fontWeight: 'bold',
  },
});

export default Login;
