import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEN from './Component/Langauge/en.json';
import translareAR from './Component/Langauge/ar.json';
import languageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: translateEN
    },
    ar: {
        translation: translareAR
    }
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;