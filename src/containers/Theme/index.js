import React from 'react';
import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0a3d62',
  },
};

export default MyTheme;
