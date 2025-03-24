// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Optional: Detects browser language

// Import translation files
import az from './locales/az/translation.json';
import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

i18n
  .use(LanguageDetector) // Detects user's language (optional)
  .use(initReactI18next) // Bind i18next to React
  .init({
    resources: {
      az: { translation: az },
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'az', // Default language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser
      caches: ['localStorage'], // Persist language choice
    },
  });

export default i18n;