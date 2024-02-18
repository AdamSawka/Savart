import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "translate/locales/en/translation.json";
import translationPL from "translate/locales/pl/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

i18n.use(initReactI18next).init({
  lng: "pl",
  resources
});

export default i18n;
