import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Link = ({ text, navigation, href, styleLink, colors, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(href)}>
      <Text style={[styleLink, { color: colors.primary }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;
