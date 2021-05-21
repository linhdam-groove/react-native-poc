import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TouchableRipple, useTheme, Switch } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import StyleCommon from 'theme/StyleCommon';
import { AuthContext } from 'components/Basic/Context';

function Setting() {
  const paperTheme = useTheme();
  const { colors } = paperTheme;
  const { toggleTheme } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <View
      style={[
        StyleCommon.container,
        styles.wrapper,
        {
          paddingTop: 50,
          backgroundColor: colors.background,
          color: colors.text,
        },
      ]}>
      <View>
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}>
          <View style={styles.preference}>
            <Text style={[styles.theme, { color: colors.primary }]}>
              Dark Theme
            </Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </View>
      <View>
        <View style={styles.preference}>
          <Text style={[styles.theme, { color: colors.primary }]}>
            {t('global.language')}
          </Text>
          <TouchableOpacity>
            <Text> EN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  theme: {
    fontWeight: 'bold',
    justifyContent: 'center',
    lineHeight: 30,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default Setting;
