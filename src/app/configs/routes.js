import React from 'react';
import i18next from 'i18next';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import {
  PublicLayout,
  Home
} from '../containers';

export default () => (
  <Router>
    <Switch>
      <PublicLayout
        exact
        path="/"
        component={Home}
        title={i18next.t('home.title')}
      />
    </Switch>
  </Router>
);
