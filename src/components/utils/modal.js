import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { setNikename } from '../../store/currentUser/currentUser';

const useStyle = makeStyles((theme) => ({
  btnErr: {
    backgroundColor: red[500],
    '&::hover': {
      color: 'white',
      backgroundColor: blue[900],
    },
  },
}))


export default function FormDialog({ nikename, openModal, setOpenModal }) {
  const classes = useStyle()
  const dispatch = useDispatch()
  const [newNikename, setNewNikename] = useState(nikename);
console.log('modal',openModal)

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleSuccess = () => {
    if (nikename !== newNikename) {
      console.log(newNikename)
      dispatch(setNikename(newNikename))
      setOpenModal(false);
    } else {
      console.log('Oops')
    }
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Chenge your nikename</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Nikename"
            type="text"
            variant='outlined'
            defaultValue={nikename}
            onChange={(e) => setNewNikename(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' >
            Cancel
          </Button>
          <Button onClick={handleSuccess} color='secondary'
            variant='contained'
          // className={classes.btnErr}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
