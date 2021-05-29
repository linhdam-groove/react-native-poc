import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Switch } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';

import StyleCommon from 'themes';
import Button from 'components/Basic/Button';
import Input from 'components/Basic/Input';
import Password from 'components/Basic/Password';
import Link from 'components/Basic/Link';
import { EMAIL_REGEX, SCREENS } from 'constants/common';
import { authSignUp } from 'auth';

function Register({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [showPsw, setShowPsw] = useState(true);
  const [confirmShowPsw, setConfirmShowPsw] = useState(true);
  const [isSignUpFirebase, setIsSignUpFirebase] = useState(false);
  const [psw, setPsw] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSuccess = () => {};

  const onFail = () => {};

  const onSignup = data => {
    authSignUp(data, onSuccess, onFail);
  };

  return (
    <View
      style={[
        StyleCommon.container,
        StyleCommon.centerContent,
        styles.wrapperContent,
      ]}>
      <Text style={[styles.title, { color: colors.primary }]}>
        {t('register.title')}
      </Text>
      <Text style={[styles.status, { color: colors.primary }]}>
        {t('register.status')}
      </Text>

      <Controller
        name="username"
        control={control}
        rules={{
          required: {
            value: true,
            message: t('register.placeholders.username'),
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Username"
            error={errors.username}
            errorText={errors?.username?.message}
            colors={colors}
            onChangeText={text => onChange(text)}
            value={value}
            iconLeft="user"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: t('register.placeholders.email'),
          },
          pattern: {
            value: EMAIL_REGEX,
            message: t('register.invalid.email'),
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Email"
            error={errors.email}
            errorText={errors?.email?.message}
            colors={colors}
            onChangeText={text => onChange(text)}
            value={value}
            iconLeft="user"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: t('register.placeholders.password'),
          },
          minLength: {
            value: 8,
            message: t('register.invalid.minLengthPsw'),
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Password
            placeholder="Password"
            error={errors.password}
            errorText={errors?.password?.message}
            colors={colors}
            onChangeText={text => {
              onChange(text), setPsw(text);
            }}
            value={value}
            iconRight
            optionsIcon={showPsw}
            iconLeft="unlock"
            iconBegin="eye"
            iconChanged="eyeo"
            handleIconRight={() => setShowPsw(!showPsw)}
            secureTextEntry={showPsw}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: {
            value: true,
            message: t('register.placeholders.confirmPassword'),
          },
          validate: value => value === psw || t('register.invalid.pswNotMatch'),
        }}
        render={({ field: { onChange, value } }) => (
          <Password
            placeholder={t('register.confirm')}
            error={errors.confirmPassword}
            errorText={errors?.confirmPassword?.message}
            colors={colors}
            onChangeText={text => onChange(text)}
            value={value}
            iconRight
            optionsIcon={confirmShowPsw}
            iconLeft="unlock"
            iconBegin="eye"
            iconChanged="eyeo"
            handleIconRight={() => setConfirmShowPsw(!confirmShowPsw)}
            secureTextEntry={confirmShowPsw}
          />
        )}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsSignUpFirebase(!isSignUpFirebase)}>
        <View style={styles.firebase}>
          <Text
            style={[
              styles.firebaseText,
              {
                color: colors.primary,
                fontWeight: isSignUpFirebase ? 'bold' : 'normal',
              },
            ]}>
            {t('register.signUpFirebase')}
          </Text>
          <View pointerEvents="none">
            <Switch value={isSignUpFirebase} />
          </View>
        </View>
      </TouchableOpacity>

      <Button
        styleBtn={styles.btn}
        colors={colors}
        label={t('register.title')}
        onPress={handleSubmit(onSignup)}
      />

      <Link
        navigation={navigation}
        colors={colors}
        text={t('register.alreadyAccount')}
        styleLink={styles.haveAccount}
        href={SCREENS.LOGIN}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  status: {
    marginBottom: 40,
  },
  wrapperInput: {
    marginBottom: 20,
  },
  wrapperContent: {
    paddingHorizontal: 25,
  },
  btn: {
    marginTop: 30,
    width: '100%',
  },
  haveAccount: {
    marginTop: 30,
    fontWeight: 'bold',
  },
  firebase: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  firebaseText: {
    marginRight: 10,
  },
});

export default Register;
