import React from 'react';
import PropsTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../../themes';


const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);


Layout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default Layout;
