import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import StyleCommon from 'themes';

const Input = ({
  colors,
  value,
  style,
  iconRight,
  optionsIcon,
  iconBegin,
  iconChanged,
  iconLeft,
  errorText,
  handleIconRight,
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          StyleCommon.wrapperInputIcon,
          props.error && styles.errorInput,
          { marginBottom: props.error ? 10 : 20 },
        ]}>
        {iconLeft && (
          <IconAntDesign
            color={colors.primary}
            name={iconLeft}
            size={20}
            style={StyleCommon.iconInput}
          />
        )}

        <TextInput
          style={[StyleCommon.inputIcon, styles.input, props.style]}
          {...props}
        />

        {iconRight && (
          <TouchableOpacity onPress={handleIconRight}>
            <IconAntDesign
              color={colors.primary}
              name={optionsIcon ? 'eye' : 'eyeo'}
              size={20}
              style={StyleCommon.iconInput}
            />
          </TouchableOpacity>
        )}
      </View>

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '100%',
  },
  errorText: {
    color: '#eb2f06',
    marginBottom: 20,
  },
  errorInput: {
    borderColor: '#eb2f06',
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default Input;
