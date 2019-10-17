
import Grid from '@material-ui/core/Grid';
import React from 'react';

import { sideImageStyles as useStyles } from './styles';


export const AuthSideImage = () => {
  const classes = useStyles({});
  return <Grid item xs={false} sm={4} md={7} className={classes.image} />;
};
