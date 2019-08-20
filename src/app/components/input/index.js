import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input as InputLib } from 'antd';
import { Container } from './styles';

export default function Input({ field, error, type, label, ...otherProps }) {
  function renderField() {
    switch (type) {
      case 'password':
        return (
          <InputLib.Password
            {...field}
            {...otherProps}
          />
        );
      case 'textarea':
        return (
          <InputLib.TextArea
            {...field}
            {...otherProps}
          />
        );
      default:
        return (
          <InputLib
            type={type}
            {...field}
            {...otherProps}
          />
        );
    }
  }

  return (
    <Container type={type}>
      <Form.Item
        colon={false}
        label={label}
        help={error}
        validateStatus={error ? 'error' : null}
      >
        {renderField()}
      </Form.Item>
    </Container>
  );
};

Input.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string
};
