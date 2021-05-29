import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import StyleCommon from 'themes';

export default function Button({ label, colors, styleBtn, ...props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      style={[styles.btn, styleBtn]}>
      <Text
        style={[
          StyleCommon.button,
          StyleCommon.fullWidth,
          {
            color: colors.labelBtn,
            backgroundColor: colors.backgroundBtn,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  btn: {
    alignItems: 'center',
    width: '100%',
  },
};
