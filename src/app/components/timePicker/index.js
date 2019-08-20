import React from 'react';
import InputMask from '../inputMask';

export default props => <InputMask maskProps={{ mask: '00{:}00' }} {...props} />
