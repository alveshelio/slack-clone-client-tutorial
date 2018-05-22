import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

import StyledForm from '../StyledForm';

const LoginForm = ({
  email,
  password,
  onChange,
  onSubmit,
  loading,
  error,
}) => (
  <div>
    {!loading && (
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
    )}
    {error && <p>There was an error, please try again later</p>}
  </div>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginForm;
