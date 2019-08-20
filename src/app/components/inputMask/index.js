import React from 'react';
import PropTypes from 'prop-types';
import IMask from 'imask';
import { Form, Input as InputLib } from 'antd';
import { Container } from './styles';

export default function MaskInput({ maskProps, field, label, form, error, ...otherProps }) {
  function onChange(event) {
    const masked = IMask.createMask(maskProps);

    form.setFieldValue(field.name, masked.resolve(event.target.value));
    form.setFieldTouched(field.name, true);
  }

  return (
    <Container>
      <Form.Item
        label={label}
        help={error}
        validateStatus={error ? 'error' : null}
      >
        <InputLib
          {...field}
          {...otherProps}
          onChange={onChange}
        />
      </Form.Item>
    </Container>
  );
}

MaskInput.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string
}
