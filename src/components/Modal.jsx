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
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Modal = ({ open, onClose, setOpen, allUsers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(allUsers);
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
            {allUsers
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allUsers.length}
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
