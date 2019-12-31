import React from 'react';
import PropsTypes from 'prop-types';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import createOverrides from '../../themes';

const baseTheme = createMuiTheme();
const Layout = ({ children }) => (
  <MuiThemeProvider theme={{
    ...baseTheme,
    overrides: createOverrides(baseTheme),
  }}
  >
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);


Layout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default Layout;
