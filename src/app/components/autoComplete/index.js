import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Form, AutoComplete as AutoCompleteLib } from 'antd';
import { Container } from './styles';

export default function Input({ field, form, error, searchFn, label, ...otherProps }) {
  const [dataSource, setDataSource] = useState([]);

  function onChange(value) {
    form.setFieldValue(field.name, value);
    form.setFieldTouched(field.name, true);
  }

  function onSearch(query) {
    searchFn(query).then(response => {
      setDataSource(response);
    });
  }

  function renderOptions() {
    return dataSource.map(item => (
      <AutoCompleteLib.Option key={uniqueId()} value={item.value}>
        {item.label}
      </AutoCompleteLib.Option>
    ));
  }

  return (
    <Container>
      <Form.Item
        label={label}
        help={error}
        validateStatus={error ? 'error' : null}
      >
        <AutoCompleteLib
          {...field}
          {...otherProps}
          dataSource={renderOptions()}
          onChange={onChange}
          onSearch={onSearch}
        />
      </Form.Item>
    </Container>
  );
};

Input.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  searchFn: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string
};
