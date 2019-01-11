import React from 'react';
import { Route } from 'react-router';

const RouteWithSubRoutes = props => {
  const {
    path,
    computedMatch,
    component: Component,
    routes,
    restProps,
    appState
  } = props;
  
  return (
    <Route
      path={path}
      render={props => {
        // pass the sub-routes down to keep nesting
        return (
          <Component
            {...props}
            {...restProps}
            appState={appState}
            match={computedMatch}
            routes={routes}
          />
        );
      }}
    />
  );
};

export default RouteWithSubRoutes;
