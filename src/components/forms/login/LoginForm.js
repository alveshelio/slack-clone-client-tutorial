import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

import StyledForm from '../StyledForm';

const LoginForm = ({
  email,
  password,
  onChange,
  onSubmit,
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
};

export default LoginForm;
