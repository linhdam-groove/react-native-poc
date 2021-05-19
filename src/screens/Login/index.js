import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextInput from 'components/TextInput';

import StyleCommon from 'theme/StyleCommon';

function Login() {
  return (
    <View style={[StyleCommon.container, StyleCommon.centerContent]}>
      <Text style={styles.title}> SIGN IN </Text>
      <TextInput style={[StyleCommon.input, styles.input]} />
      <TextInput style={StyleCommon.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
});

export default Login;
