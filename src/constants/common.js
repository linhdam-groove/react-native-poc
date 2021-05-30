export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SCREENS = {
  LOGIN: 'Login',
  HOME: 'Home',
  REGISTER: 'Register',
  SETTING: 'Setting',
  LAUNCH: 'Launch',
};

export const ERROR_CODE = {
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PSW: 'auth/wrong-password',
  EMAIL_ALREADY_USE: 'auth/email-already-in-use',
};
