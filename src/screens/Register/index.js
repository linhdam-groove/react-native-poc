import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import StyleCommon from 'themes';

function Register() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const handleRegisterAccount = () => {
    console.log(123123);
  };

  return (
    <View
      style={[
        StyleCommon.container,
        StyleCommon.centerContent,
        styles.wrapperContent,
      ]}>
      <Text style={[styles.title, { color: colors.primary }]}>
        {t('register.title')}
      </Text>
      <Text style={[styles.status, { color: colors.primary }]}>
        {t('register.status')}
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

      <TouchableOpacity
        onPress={handleRegisterAccount}
        style={{ width: '100%' }}>
        <Text
          style={[
            StyleCommon.button,
            StyleCommon.textBtn,
            styles.btn,
            {
              color: colors.labelBtn,
              backgroundColor: colors.backgroundBtn,
            },
          ]}>
          {t('register.title')}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.haveAccount, { color: colors.primary }]}>
        {t('register.alreadyAccount')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  status: {
    marginBottom: 40,
  },
  wrapperInput: {
    marginBottom: 20,
  },
  wrapperContent: {
    paddingHorizontal: 25,
  },
  btn: {
    marginTop: 30,
    width: '100%',
  },
  haveAccount: {
    marginTop: 30,
    fontWeight: 'bold',
  },
});

export default Register;
