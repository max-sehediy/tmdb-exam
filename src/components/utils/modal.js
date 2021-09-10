import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { setNikename } from '../../store/currentUser/currentUser';




export default function FormDialog({ nikename, openModal, setOpenModal }) {
  const dispatch = useDispatch()
  const [newNikename, setNewNikename] = useState(nikename);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleSuccess = () => {
    if (nikename !== newNikename) {
      dispatch(setNikename(newNikename))
      setOpenModal(false);
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
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
