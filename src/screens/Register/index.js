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

import StyleCommon from 'theme/StyleCommon';

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
        style={[StyleCommon.button, styles.btn]}>
        <Text
          style={[
            StyleCommon.textBtn,
            {
              color: colors.primary,
              backgroundColor: colors.backgroundBtn,
            },
          ]}>
          {t('register.title')}
        </Text>
      </TouchableOpacity>

      <Text>{t('register.alreadyAccount')}</Text>
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
});

export default Register;
