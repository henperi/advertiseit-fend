
import React from 'react';

import Typography from '@material-ui/core/Typography';
import LinkRouter from '../Navigation/LinkRouter';

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
    <LinkRouter color="inherit" to="/">
        Advertise It
    </LinkRouter>
    {' '}
    {new Date().getFullYear()}
      .
  </Typography>
);

export default Copyright;
