/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGlobalStore } from '../../store';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useGlobalStore();
  const { auth } = state;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated === true) {
          return <Component {...props} />;
        }
        return (
          <Redirect to="/signin" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
