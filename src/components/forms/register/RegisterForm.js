import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

import StyledForm from '../StyledForm';

const RegisterForm = ({
  username,
  email,
  password,
  onChange,
  register,
  errors,
}) => (
  <StyledForm>
    <TextField
      required
      label='username'
      value={username}
      onChange={onChange}
      name='username'
      margin='normal'
      fullWidth
      error={errors.username.status}
      helperText={errors.username.helperText}
    />
    <TextField
      required
      label='email'
      value={email}
      onChange={onChange}
      name='email'
      margin='normal'
      fullWidth
      error={errors.email.status}
      helperText={errors.email.helperText}
    />
    <TextField
      required
      label='password'
      type='password'
      value={password}
      onChange={onChange}
      name='password'
      margin='normal'
      fullWidth
      error={errors.password.status}
      helperText={errors.password.helperText}
    />
    <Button
      variant='raised'
      color='primary'
      fullWidth
      onClick={register}
    >
      Sign Up
    </Button>
  </StyledForm>
);

RegisterForm.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    username: PropTypes.shape({
      status: PropTypes.bool.isRequired,
      helperText: PropTypes.string,
    }).isRequired,
    email: PropTypes.shape({
      status: PropTypes.bool.isRequired,
      helperText: PropTypes.string,
    }).isRequired,
    password: PropTypes.shape({
      status: PropTypes.bool.isRequired,
      helperText: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default RegisterForm;
