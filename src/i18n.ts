import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locals/en.json';
import esTranslation from './locals/es.json';

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    ns: ['translation'], // <-- Agrega esta línea si no la tienes
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;