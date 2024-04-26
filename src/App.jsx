import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Modal from './components/Modal';
import { getAllUsers } from './apis/api';

const App = () => {
  const [open, setOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((usersData) => setAllUsers(usersData));

    return () => {
      setAllUsers([]);
    };
  }, []);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Typography sx={{ marginBottom: '1.5rem' }}>
        Click button to open Modal
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        View List
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        setOpen={setOpen}
        allUsers={allUsers}
      />
    </>
  );
};

export default App;
