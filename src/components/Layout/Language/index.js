import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import i18next from 'i18next';

function Language() {
  const paperTheme = useTheme();
  const [language, setLanguage] = useState('EN');
  const { colors } = paperTheme;

  const handleChangeLanguage = () => {
    if (i18next.language === 'en') {
      i18next.changeLanguage('vi');
      setLanguage('VI');
    } else {
      i18next.changeLanguage('en');
      setLanguage('EN');
    }
  };

  return (
    <TouchableOpacity onPress={() => handleChangeLanguage()}>
      <Text
        style={[
          styles.btn,
          {
            color: colors.labelBtn,
            backgroundColor: colors.backgroundBtn,
          },
        ]}>
        {language}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    lineHeight: 30,
    fontWeight: 'bold',
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 1,
    paddingHorizontal: 15,
  },
});

export default Language;
