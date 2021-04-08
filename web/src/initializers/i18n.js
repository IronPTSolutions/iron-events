import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from '../utils/locales/es/translation.json';
import enTranslations from '../utils/locales/en/translation.json';

const resources = {
  es: { translation: esTranslations },
  en: { translation: enTranslations },
};
const lng = localStorage.getItem('lng');

export const initialize = () =>
  i18n.use(initReactI18next).init({
    resources,
    lng: lng ? lng : 'es',
    fallbackLng: 'es',
  });

initialize();

export default i18n;
