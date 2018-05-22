import React from 'react';
import { Grid, Tab } from 'semantic-ui-react';


import Layout from '../layout/Layout';
import LoginForm from '../components/forms/login/LoginForm';

const Login = () => (
  <Layout>
    <Grid columns={3}>
      <Grid.Row centered>
        <h1>Sign up / Login</h1>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <Tab />
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  </Layout>
);

export default Login;
