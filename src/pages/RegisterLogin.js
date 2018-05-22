import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { PersonAdd, LockOpen } from '@material-ui/icons';
import styled from 'styled-components';

import Layout from '../layout/Layout';
import RegisterForm from '../components/forms/register/RegisterForm';
import LoginForm from '../components/forms/login/LoginForm';

const CenteredTabs = styled(Tabs)`
    div {
      justify-content: center;
    }
`;

const REGISTER_MUTATION = gql`
  #  mutation($username: String!, $email: String!, $password: String!) {
  #    register(username: $username, email: $email, password: $password)
  #  }
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

class RegisterLogin extends Component {
  state = {
    value: 0,
    user: {
      username: '',
      email: '',
      password: '',
    },
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = () => {
    console.log('form submitted with data', this.state);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      username,
      email,
      password,
    } = this.state.user;
    const { value } = this.state;

    return (
      <Mutation mutation={REGISTER_MUTATION}>
        {(register, { data, loading, error }) => (
          <Layout>
            <Grid container justify='center'>
              <Grid item xs={3}>
                <CenteredTabs
                  value={value}
                  onChange={this.handleChange}
                  scrollable
                  scrollButtons='on'
                  indicatorColor='primary'
                  textColor='primary'
                >
                  <Tab label='Sign Up' icon={<PersonAdd />} />
                  <Tab label='Sign In' icon={<LockOpen />} />
                </CenteredTabs>
                {value === 0 && (
                  <RegisterForm
                    username={username}
                    email={email}
                    password={password}
                    onChange={this.onChange}
                    onSubmit={async () => {
                      const user = await register({
                        variables: this.state.user,
                      });
                      console.log('user', user);
                    }}
                    loading={loading}
                    error={error}
                  />
                )}
                {value === 1 && (
                  <LoginForm
                    email={email}
                    password={password}
                    onChange={this.onChange}
                    onSubmit={this.login}
                    loading={loading}
                    error={error}
                  />
                )}
              </Grid>
            </Grid>
          </Layout>
        )}
      </Mutation>
    );
  }
}

export default RegisterLogin;
