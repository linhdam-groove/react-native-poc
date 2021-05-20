import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Text style={styles.title}> SIGN IN TEST</Text>
      <View style={[StyleCommon.input, styles.input]}>
        {/* <Icon name={'account-circle'} /> */}
        <TextInput />
      </View>
      <TextInput style={StyleCommon.input} />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text
        style={[
          StyleCommon.button,
          styles.btn,
          {
            color: colors.text,
            backgroundColor: colors.background,
          },
        ]}>
        SIGN IN
      </Text>
      <TouchableOpacity style={styles.createNew}>
        <Text>
          Don't have account? <Text> Create new account </Text>
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
  input: {
    marginBottom: 20,
  },
  forgot: {
    width: '100%',
    textAlign: 'right',
    marginTop: 20,
    marginBottom: 30,
  },
  btn: {
    width: '100%',
  },
  createNew: {
    marginTop: 30,
  },
});

export default Login;
