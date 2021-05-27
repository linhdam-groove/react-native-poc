import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { configureFonts, useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
// import auth from '@react-native-firebase/auth';

import { loginActions } from './slices';

import Input from 'components/Basic/Input';
import Button from 'components/Basic/Button';
import StyleCommon from 'themes';
import { authLogin } from 'auth';

function Login({ navigation }) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [showPsw, setShowPsw] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const isLoading = useSelector(state => state.login.isLoading);

  const handleShowPassword = () => {
    setShowPsw(!showPsw);
  };

  const onSubmit = data => {
    dispatch(loginActions.login(data));
  };

  const onSuccess = res => {
    console.log('🚀 ~ file: index.js ~ line 44 ~ onSuccess ~ res', res);
  };

  const onFail = error => {
    console.log('error', error);
  };

  const onLoginFirebase = data => {
    // authLogin(onSuccess, onFail);
    dispatch(loginActions.authLogin(data));
  };

  return (
    <View
      style={[
        StyleCommon.container,
        StyleCommon.centerContent,
        styles.wrapper,
        { backgroundColor: colors.background, color: colors.text },
      ]}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={[styles.title, { color: colors.primary }]}>
            {t('login.signIn')}
          </Text>
          <Controller
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: 'Username is required' },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.username}
                errorText={errors?.username?.message}
                colors={colors}
                onChangeText={text => onChange(text)}
                value={value}
                iconLeft="user"
              />
            )}
            name="username"
          />
          <Controller
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: 'Password is required' },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.password}
                errorText={errors?.password?.message}
                colors={colors}
                onChangeText={text => onChange(text)}
                value={value}
                iconRight
                optionsIcon={showPsw}
                iconLeft="unlock"
                iconBegin="eye"
                iconChanged="eyeo"
                handleIconRight={handleShowPassword}
                secureTextEntry={showPsw}
              />
            )}
            name="password"
          />

          <TouchableOpacity style={[styles.forgot]}>
            <Text style={{ fontWeight: 'bold', color: colors.primary }}>
              {t('login.forgotPsw')}
            </Text>
          </TouchableOpacity>

          <Button
            colors={colors}
            label={t('login.signIn')}
            onPress={handleSubmit(onSubmit)}
          />
          <Button
            colors={colors}
            label="Login with Firebase"
            onPress={handleSubmit(onLoginFirebase)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.createAcc, { color: colors.primary }]}>
            <Text style={{ color: colors.primary }}>
              {t('login.haveAccount')}
            </Text>
            <Text style={[styles.createNew, { color: colors.primary }]}>
              {' '}
              {t('login.createAccount')}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textTransform: 'uppercase',
  },
  wrapperInput: {
    marginBottom: 20,
  },
  forgot: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'flex-end',
  },
  btn: {
    alignItems: 'center',
    width: '100%',
  },
  createAcc: {
    flexDirection: 'row',
    marginTop: 30,
  },
  createNew: {
    fontWeight: 'bold',
  },
});

export default Login;
