import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

import StyledForm from '../StyledForm';

const RegisterForm = ({
  username,
  email,
  password,
  onChange,
  onSubmit,
}) => (
  <StyledForm onSubmit={onSubmit}>
    <TextField
      required
      label='username'
      value={username}
      onChange={onChange}
      name='username'
      margin='normal'
      fullWidth
    />
    <TextField
      required
      label='email'
      value={email}
      onChange={onChange}
      name='email'
      margin='normal'
      fullWidth
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
    />
    <Button variant='raised' color='primary' fullWidth onClick={onSubmit}>
      Sign Up
    </Button>
  </StyledForm>
);

RegisterForm.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
