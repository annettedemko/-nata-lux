import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de.json';
import ru from './locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      ru: { translation: ru }
    },
    lng: 'de', // default language
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
