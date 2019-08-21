export default {
  applicationName: 'Goes to eleven UX',

  nav: {
    home: 'Work',
    team: 'Team',
    contact: 'Contact'
  },

  notifications: {
    error: {
      title: 'Houve um erro !',
      message: 'Infelizmente ocorreu um erro, por favor tente de novo'
    }
  },

  formValidation: {
    errorNotification: 'Existem erros neste formulário. Por favor, verifique os campos em destaque.',
    errorNotificationExit: 'Existem erros neste formulário. Tem certeza que deseja continuar? As modificações não serão salvas.',
    required: 'Campo obrigatório',
    invalidEmail: 'Email inválido',
    invalidDate: 'Data inválida',
    invalidTime: 'Horário inválido',
    startDateInvalid: 'O horário inicial deve ser menor que o horário final',
    invalidDateRange: 'Intervalo inválido',
    invalidInteger: 'Digite apenas numeros inteiros',
    min: 'Este campo deve conter no mínimo :min',
    max: 'Este campo deve conter no máximo :max',
    interval: 'Os valores devem estar entre %{min} e %{max}',
    same: 'O valor deste campo deve ser igual a :attribute',
    dateInTheFuture: 'Esta data não deveria estar no futuro',
    unauthorized: 'Você não está autorizado a executar esta operação',
    size: 'Este campo deve conter :size',
    between: 'Este campo deve conter entre :min e :max',
    invalidDocumentId: 'Número de documento inválido',
    confirmed: 'O valor deste campo não pode ser diferente do próximo'
  },

  actions: {
    save: 'Salvar'
  }
};
