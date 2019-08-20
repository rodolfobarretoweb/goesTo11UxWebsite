import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Form, Select as SelectLib } from 'antd';
import { Container } from './styles';

export default function Select({ field, form, error, label, options, ...otherProps }) {
  function onChange(value) {
    form.setFieldValue(field.name, value);
    form.setFieldTouched(field.name, true);
  }

  function renderOptions() {
    return options.map(item => (
      <SelectLib.Option
        key={uniqueId()}
        value={item.value}
      >
        {item.label}
      </SelectLib.Option>
    ));
  }

  return(
    <Container>
      <Form.Item
        label={label}
        help={error}
        validateStatus={error ? 'error' : null}
      >
        <SelectLib
          {...field}
          {...otherProps}
          onChange={onChange}
        >
          {renderOptions()}
        </SelectLib>
      </Form.Item>
    </Container>
  );
}

Select.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  error: PropTypes.string
}
