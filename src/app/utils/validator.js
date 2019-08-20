import i18next from 'i18next';
import { set, merge } from 'lodash';
import Validator from 'validatorjs';

export default class extends Validator {
  constructor(values, rules, translations = {}) {
    const defaultTranslations = {
      required: i18next.t('shared.formValidation.required'),
      email: i18next.t('shared.formValidation.invalidEmail'),
      date: i18next.t('shared.formValidation.invalidDate'),
      integer: i18next.t('shared.formValidation.invalidInteger'),
      min: i18next.t('shared.formValidation.min'),
      max: i18next.t('shared.formValidation.max'),
      size: i18next.t('shared.formValidation.size'),
      between: i18next.t('shared.formValidation.between'),
      same: i18next.t('shared.formValidation.same'),
      confirmed: i18next.t('shared.formValidation.confirmed')
    };

    super(values, rules, { ...defaultTranslations, ...translations });
  }

  getErrors() {
    this.passes();

    const { errors } = this.errors;

    const shallow = Object.keys(errors)
      .filter(key => !key.match(/\w+\.\w+/gi))
      .reduce((output, key) => (Object.assign(output, { [key]: errors[key].join(', ') })), {});

    // transform path key, such as in param1.param2.param3
    const deep = Object.keys(errors)
      .filter(key => !!key.match(/\w+\.\w+/gi))
      .reduce((output, key) => merge(
        output,
        set(output, key, errors[key].join(','))
      ), {});

    return { ...shallow, ...deep };
  }
}
