import React from 'react';
import { Grid } from '@material-ui/core';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const Layout = ({ children }) => (
  <Grid container>
    {children}
  </Grid>
);

export default Layout;
