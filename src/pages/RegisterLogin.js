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
import validate from '../utils/validate';

const CenteredTabs = styled(Tabs)`
    div {
      justify-content: center;
    }
`;

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      username, email
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
    errors: {
      username: {
        status: false,
        helperText: null,
      },
      email: {
        status: false,
        helperText: null,
      },
      password: {
        status: false,
        helperText: null,
      },
    },
  };

  onChange = (e) => {
    // const { errors } = this.state;
    if (this.state.errors[e.target.name].status) {
      this.setState({
        errors: {
          ...this.state.errors,
          [e.target.name]: {
            status: false,
            helperText: null,
          },
        },
      }, () => console.log('this.state', this.state.errors));
    }

    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = () => {
  };

  registerUser = (action) => {
    const { user, errors } = this.state;
    this.setState({ errors: validate(user, errors) });
    if (!errors.username.status || !errors.email.status || !errors.password.status) {
      return action({ variables: this.state.user });
    }
    return false;
  };

  changeTabs = (event, value) => {
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
        onCompleted={() => this.setState({ showNotifier: true })}
      >
        {(register, { data, error }) =>
          (
            <Layout>
              {console.log('data', data)}
              <Grid container justify='center'>
                <Grid item xs={3}>
                  <CenteredTabs
                    value={value}
                    onChange={this.changeTabs}
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
                      errors={this.state.errors}
                    />
                  )}
                  {value === 1 && (
                    <LoginForm
                      email={email}
                      password={password}
                      onChange={this.onChange}
                      onSubmit={this.login}
                      validate={validate}
                      errors={this.state.errors}
                    />
                  )}
                  {error && <Notifier
                    message='There was an error creating the user'
                    handleClose={this.closeNotifier}
                    open={this.state.showNotifier}
                    status='error'
                  />}
                  {!error && data && <Notifier
                    message={`User ${data.register.username} created successfully`}
                    handleClose={this.closeNotifier}
                    open={this.state.showNotifier}
                    status='success'
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
