import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { PersonAdd, LockOpen } from '@material-ui/icons';
import styled from 'styled-components';

import Layout from '../layout/Layout';
import RegisterForm from '../components/forms/register/RegisterForm';
import LoginForm from '../components/forms/login/LoginForm';
import Notifier from '../components/shared/Notifier';

const CenteredTabs = styled(Tabs)`
    div {
      justify-content: center;
    }
`;

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      email, password
    }
  }
`;

class RegisterLogin extends Component {
  state = {
    value: 0,
    showNotifier: false,
    user: {
      username: '',
      email: '',
      password: '',
    },
  };

  onChange = e => this.setState({
    ...this.state,
    user: {
      ...this.state.user,
      [e.target.name]: e.target.value,
    },
  });

  login = () => {
  };

  registerUser = async action => action({ variables: this.state.user });

  handleChange = (event, value) => {
    this.setState({ value });
  };

  closeNotifier = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showNotifier: false });
  };

  render() {
    const {
      username,
      email,
      password,
    } = this.state.user;
    const { value } = this.state;

    return (
      <Mutation
        mutation={REGISTER_MUTATION}
        onError={() => this.setState({ showNotifier: true })}
      >
        {(register, { error, loading }) =>
          loading
            ? <div>Loading...</div>
            : (
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
                        register={() => this.registerUser(register)}
                      />
                    )}
                    {value === 1 && (
                      <LoginForm
                        email={email}
                        password={password}
                        onChange={this.onChange}
                        onSubmit={this.login}
                      />
                    )}
                    {error && <Notifier
                      message='There was an error creating the user'
                      handleClose={this.closeNotifier}
                      open={this.state.showNotifier}
                    />}
                  </Grid>
                </Grid>
              </Layout>)
        }
      </Mutation>
    );
  }
}

export default RegisterLogin;
