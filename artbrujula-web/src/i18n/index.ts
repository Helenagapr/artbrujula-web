import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ca from './locals/ca/translation.json';
import es from './locals/es/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            ca: { translation: ca }
        },
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        }
    });

// i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
//   return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
// });

export default i18n;
