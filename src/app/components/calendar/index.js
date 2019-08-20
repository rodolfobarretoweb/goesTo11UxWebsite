import React from 'react';
import { Calendar as CalendarLib } from 'antd';
import ptBR from 'antd/es/locale-provider/pt_BR';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Container } from './styles';

moment.locale('pt-br');

export default props => (
  <Container>
    <CalendarLib locale={ptBR.Calendar} {...props} />
  </Container>
);
