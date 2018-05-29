import React from 'react';
import Proptypes from 'prop-types';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

import './Notifier.css';

const StyledSnackbar = styled(Snackbar)`
  background: ${props => props.status === 'error' ? 'red' : (props.status === 'success') ? 'green' : 'black'},
`;

const Notifier = ({
  message,
  handleClose,
  open,
  status,
}) => (
  <StyledSnackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    autoHideDuration={60000}
    onClose={handleClose}
    ContentProps={{
      'aria-describedby': 'notifier',
    }}
    message={<span id='notifier'>{message}</span>}
    action={
      <IconButton
        key='close'
        aria-label='Close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    }
    status={status}
  />
);

Notifier.propTypes = {
  message: Proptypes.string.isRequired,
  handleClose: Proptypes.func.isRequired,
  open: Proptypes.bool.isRequired,
  status: Proptypes.string.isRequired,
};

export default Notifier;
