import i18next from 'i18next';
import * as langs from './pt-BR';
import { PT_BR, DEVELOPMENT } from '../configs/constants';

export const resources = { [PT_BR]: { translation: langs } };

export default i18next.init({
  debug: process.env.NODE_ENV === DEVELOPMENT,
  interpolation: {
    escapeValue: false
  },
  returnObjects: true,
  lng: PT_BR,
  resources
});
