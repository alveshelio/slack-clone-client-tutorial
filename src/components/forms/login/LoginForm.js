import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

import StyledForm from '../StyledForm';

const LoginForm = ({
  email,
  password,
  onChange,
  onSubmit,
  errors,
}) => (
  <StyledForm onSubmit={onSubmit}>
    <TextField
      required
      label='email'
      value={email}
      onChange={onChange}
      name='email'
      fullWidth
      margin='normal'
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
      fullWidth
      margin='normal'
      error={errors.password.status}
      helperText={errors.password.helperText}
    />

    <Button variant='raised' color='primary' fullWidth>
      Sign In
    </Button>
  </StyledForm>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
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

export default LoginForm;
