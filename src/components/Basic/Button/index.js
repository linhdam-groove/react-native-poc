import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import StyleCommon from 'themes';

export default function Button({
  label,
  colors,
  styleBtn,
  activeIndicator,
  ...props
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      {...props}
      style={[
        StyleCommon.fullWidth,
        { backgroundColor: colors.backgroundBtn },
      ]}>
      <View style={[styles.wrapperBtn, StyleCommon.button]}>
        {activeIndicator && (
          <ActivityIndicator
            size="small"
            color={colors.labelBtn}
            style={{ marginRight: 10 }}
          />
        )}
        <Text
          style={[
            styles.label,
            {
              color: colors.labelBtn,
              backgroundColor: colors.backgroundBtn,
            },
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
