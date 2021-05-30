import auth from '@react-native-firebase/auth';

export const authLogin = (data, onSuccess, onFail) =>
  auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(res => {
      onSuccess(res.user);
    })
    .catch(error => {
      onFail(error);

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
