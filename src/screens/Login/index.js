import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { loginActions } from './slices';

import { EMAIL_REGEX, SCREENS, ERROR_CODE } from 'constants/common';
import { authLogin } from 'auth';
import Input from 'components/Basic/Input';
import Password from 'components/Basic/Password';
import Button from 'components/Basic/Button';
import Language from 'components/Layout/Language';
import StyleCommon from 'themes';

function Login({ navigation }) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [showPsw, setShowPsw] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoginFirebase, setIsLoginFirebase] = useState(false);

  // const isLoading = useSelector(state => state.login.isLoading);

  // const onSubmit = data => {
  //   dispatch(loginActions.login(data));
  // };

  const onSuccess = data => {
    dispatch(loginActions.loginSuccess({ data, firebase: true }));
    setIsLoading(false);
  };

  const onFail = error => {
    if (error.code === ERROR_CODE.USER_NOT_FOUND) {
      Toast.show({
        type: 'error',
        text1: t('login.signIn'),
        text2: t('login.error.userNotFound'),
      });
    }

    if (error.code === ERROR_CODE.WRONG_PSW) {
      Toast.show({
        type: 'error',
        text1: t('login.signIn'),
        text2: t('login.error.wrongPassword'),
      });
    }

    setIsLoading(false);
  };

  const onLoginFirebase = data => {
    setIsLoading(true);
    authLogin(data, onSuccess, onFail);
  };

  return (
    <SafeAreaView>
      <View
        style={[
          StyleCommon.container,
          StyleCommon.centerContent,
          styles.wrapper,
          { backgroundColor: colors.background, color: colors.text },
        ]}>
        <Text style={[styles.title, { color: colors.primary }]}>
          {t('login.signIn')}
        </Text>

        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: t('login.required.email'),
            },
            pattern: {
              value: EMAIL_REGEX,
              message: t('register.invalid.email'),
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('register.email')}
              error={errors.email}
              errorText={errors?.email?.message}
              colors={colors}
              onChangeText={text => onChange(text)}
              value={value}
              iconLeft="email"
            />
          )}
        />
        {/* <Controller
              name="username"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: t('login.required.username'),
                },
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
            /> */}

        <Controller
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: t('login.required.password'),
            },
            minLength: {
              value: 8,
              message: t('register.invalid.minLengthPsw'),
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Password
              placeholder={t('register.password')}
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
              handleIconRight={() => setShowPsw(!showPsw)}
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

        {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsLoginFirebase(!isLoginFirebase)}>
            <View style={styles.firebase}>
              <Text
                style={[
                  styles.firebaseText,
                  {
                    color: colors.primary,
                    fontWeight: isLoginFirebase ? 'bold' : 'normal',
                  },
                ]}>
                {t('login.firebase')}
              </Text>
              <View pointerEvents="none">
                <Switch value={isLoginFirebase} />
              </View>
            </View>
          </TouchableOpacity> */}

        <Button
          colors={colors}
          label={t('login.signIn')}
          onPress={handleSubmit(onLoginFirebase)}
          activeIndicator={isLoading}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.createAcc, { color: colors.primary }]}
          onPress={() => navigation.navigate(SCREENS.REGISTER)}>
          <Text style={{ color: colors.primary }}>
            {t('login.haveAccount')}
          </Text>
          <Text style={[styles.createNew, { color: colors.primary }]}>
            {' '}
            {t('login.createAccount')}
          </Text>
        </TouchableOpacity>

        <View style={styles.language}>
          <Text style={{ fontWeight: 'bold', color: colors.primary }}>
            {t('global.chooseLanguage')}:{' '}
          </Text>
          <Language style={styles.select} />
        </View>
      </View>
    </SafeAreaView>
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
  firebase: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  firebaseText: {
    marginRight: 10,
  },
  language: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  select: {
    width: 55,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default Login;
