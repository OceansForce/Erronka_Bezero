import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Para detectar el idioma del navegador

// Importar archivos de traducción
import esMenu from './locales/es/menu.json';
import euMenu from './locales/eu/menu.json';

i18n
  .use(LanguageDetector)  // Detecta el idioma del navegador
  .use(initReactI18next)   // Integra i18next con React
  .init({
    resources: {
      es: {
        menu: esMenu
      },
      eu: {
        menu: euMenu
      }
    },
    fallbackLng: 'es', // Cambié a 'es' como fallback por si no se detecta el idioma
    debug: true, // Habilitar la depuración
    interpolation: {
      escapeValue: false // React ya se encarga de escapar valores
    },
    detection: {
      // Establecer un orden de preferencia de los idiomas
      order: ['cookie', 'localStorage', 'navigator'], // Primero intenta con cookies, luego con localStorage, y luego con el idioma del navegador
      caches: ['cookie', 'localStorage'], // Guardar el idioma en las cookies y localStorage
    },
  });

export default i18n;

