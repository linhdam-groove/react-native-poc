import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ value, onChangeText, style, ...props }) => {
  return (
    <TextInput
      style={style}
      onChangeText={onChangeText}
      value={value}
      {...props}
    />
  );
};

export default Input;
