import auth from '@react-native-firebase/auth';
import apiClient from 'apis/apiClient';

export const authLogin = params =>
  auth()
    .signInWithEmailAndPassword(params.username, params.password)
    .then(res => {
      console.log('🚀 ~ file: slices.js ~ line 58 ~ res', res);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
