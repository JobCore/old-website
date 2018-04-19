import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import { reactI18nextModule } from 'react-i18next';

i18n
  .use(XHR)
  .use(LanguageDetector)
  // .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    // Common namespace used around site
    ns: ['general-translations'],
    defaultNS: 'general-translations',

    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react
    },

    react: {
      wait: true,
    },
  });

export default i18n;
