// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import az from './AZ/AZ.json';
import en from './EN/EN.json';
import ru from './RU/RU.json';

i18n

  .use(initReactI18next)
  .init({
    resources: {
      az: { translation: az },
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;