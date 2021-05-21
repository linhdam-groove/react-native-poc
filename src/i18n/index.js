import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLanguages from './locales/en';
import viLanguages from './locales/vi';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: enLanguages,
    },
    vi: {
      translation: viLanguages,
    },
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
