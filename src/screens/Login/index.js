import React from 'react';
import { View, Text } from 'react-native';

import TextInput from '@components/TextInput';

function Login() {
  return (
    <View>
      <Text> SIGN IN </Text>
      <TextInput value="test" />
    </View>
  );
}

export default Login;
