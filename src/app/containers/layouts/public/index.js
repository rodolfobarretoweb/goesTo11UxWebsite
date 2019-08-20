import React from 'react';
import i18next from 'i18next';
import { Route } from 'react-router';
import { Layout } from 'antd';
import { renderComponent } from '../shared';
import { Title } from './styles';

export default ({ component, ...rest }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Layout.Header>
      <Title>{i18next.t('shared.applicationName')}</Title>
    </Layout.Header>

    <Layout.Content>
      <Route {...rest} render={renderComponent(component, rest)} />
    </Layout.Content>
  </Layout>
);
