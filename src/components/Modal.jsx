import '../App.css';

import {
  Dialog,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Modal = ({ open, onClose, setOpen, allUsers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredUsers = allUsers.filter((user) =>
    user.name.firstname.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // console.log(allUsers);
  return (
    <Dialog onClose={onClose} open={open}>
      <div className="modal__header">
        <DialogTitle>List of Users</DialogTitle>
        <CloseIcon
          sx={{ marginRight: '1rem', cursor: 'pointer' }}
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <TableContainer>
        <TextField
          sx={{ margin: '0.5rem' }}
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Table
        // sx={{ minWidth: 650 }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {`${user.name.firstname} ${user.name.lastname}`}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.phone}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.address.city}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 8, 10]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Dialog>
  );
};

export default Modal;
