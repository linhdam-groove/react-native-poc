import auth from '@react-native-firebase/auth';

export const authLogin = (data, onSuccess, onFail) =>
  auth()
    .signInWithEmailAndPassword(data.username, data.password)
    .then(res => {
      onSuccess(res.user);
    })
    .catch(error => {
      onFail(error);
      // if (error.code === 'auth/email-already-in-use') {
      //   console.log('That email address is already in use!');
      // }

      // if (error.code === 'auth/invalid-email') {
      //   console.log('That email address is invalid!');
      // }

      console.error(error);
    });

export const authLogout = navigation =>
  auth()
    .signOut()
    .then(() => {
      navigation.navigate('Login');
    });

export const authSignUp = (data, onSuccess, onFail) =>
  auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
      onSuccess(res.user);
    })
    .catch(error => {
      onFail(error);
      console.error(error);
    });
