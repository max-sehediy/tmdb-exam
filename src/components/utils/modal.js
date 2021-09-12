import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { setNikename } from '../../store/currentUser/currentUser';




export default function FormDialog({ nickname, openModal, setOpenModal }) {
  const dispatch = useDispatch()
  const [newNikename, setNewNikename] = useState(nickname);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleSuccess = () => {
    if (nickname !== newNikename) {
      dispatch(setNikename(newNikename))
      setOpenModal(false);
    }
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change your nickname</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Nickname"
            type="text"
            variant='outlined'
            defaultValue={nickname}
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
