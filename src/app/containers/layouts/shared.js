import React from 'react';
import queryString from 'query-string';

export const renderComponent = (Component, props) => matchProps => (
  <Component
    {...matchProps}
    {...{ history: matchProps.history, ...props }}
    queryString={queryString.parse(props.location.search)}
    routeParams={matchProps.match.params}
    location={props.location}
  />
);
