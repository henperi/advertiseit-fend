/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../../helpers/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
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

export default ProtectedRoute;
