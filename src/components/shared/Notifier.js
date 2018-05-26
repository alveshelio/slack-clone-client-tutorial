import React from 'react';
import Proptypes from 'prop-types';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Notifier = ({ message, handleClose, open }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={open}
    autoHideDuration={6000}
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
  />
);

Notifier.propTypes = {
  message: Proptypes.string.isRequired,
  handleClose: Proptypes.func.isRequired,
  open: Proptypes.bool.isRequired,
};

export default Notifier;
