import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import vi from './locales/vi';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: en,
    vi: vi,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
