import * as login from './login';
import * as register from './register';
import * as global from './global';

const languages = {
  ...login,
  ...register,
  ...global,
};

export default languages;
