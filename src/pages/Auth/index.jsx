import React from 'react';

import { Redirect } from 'react-router-dom';

const CheckAuth = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return <Redirect to="/signin" />;
};

export default CheckAuth;
