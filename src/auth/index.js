import auth from '@react-native-firebase/auth';

export const authLogin = (onSuccess, onFail) =>
  auth()
    .signInWithEmailAndPassword('linh.dam1602@gmail.com', 'Hiuhiu0908@')
    .then(res => {
      onSuccess(res);
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
