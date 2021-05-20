import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
// import { Icon } from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import TextInput from 'components/TextInput';
import StyleCommon from 'theme/StyleCommon';

function Login() {
  const { colors } = useTheme();
  console.log('🚀 ~ file: index.js ~ line 10 ~ Login ~ colors', colors);

  return (
    <View
      style={[
        StyleCommon.container,
        StyleCommon.centerContent,
        styles.wrapper,
        { backgroundColor: colors.background, color: colors.text },
      ]}>
      <Text style={[styles.title, { color: colors.primary }]}>SIGN IN</Text>
      <View style={[StyleCommon.wrapperInputIcon, styles.wapperInput]}>
        <IconAntDesign
          color={colors.primary}
          name="user"
          size={20}
          style={StyleCommon.iconInput}
        />
        <TextInput style={StyleCommon.inputIcon} />
      </View>
      <View style={[StyleCommon.wrapperInputIcon, styles.wapperInput]}>
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
        Forgot Password?
      </Text>
      <Text
        style={[
          StyleCommon.button,
          styles.btn,
          {
            color: colors.primary,
            backgroundColor: colors.backgroundBtn,
          },
        ]}>
        SIGN IN
      </Text>
      <TouchableOpacity
        activeOpacity={0.3}
        style={[styles.createAcc, { color: colors.primary }]}>
        <Text style={{ color: colors.primary }}>
          Don't have account?
          <Text style={styles.createNew}> Create new account </Text>
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
  },
  wapperInput: {
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
    width: '100%',
  },
  createAcc: {
    marginTop: 30,
  },
  createNew: {
    fontWeight: 'bold',
  },
});

export default Login;
