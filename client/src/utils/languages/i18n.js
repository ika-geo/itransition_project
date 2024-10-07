import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from "./en.js";
import {ge} from "./ge.js";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            ge: ge
        }, lng: "en", // default language
        fallbackLng: "en", interpolation: {
            escapeValue: false // react already escapes
        }
    });

export default i18n;