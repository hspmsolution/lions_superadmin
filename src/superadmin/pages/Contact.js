import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button, Grid, TextField, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../actions/contact";
const columns = [
  { id: "id", label: "Contact Id.", minWidth: 60 },
  { id: "query", label: "Name", minWidth: 100 },
  { id: "name", label: "Address", minWidth: 100 },
  { id: "number", label: "City", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "message", label: "Phone", minWidth: 100 },
  { label: "Edit", minWidth: 100 },
  { label: "Delete", minWidth: 100 },
];

export default function ContactInfo() {
  const [page, setPage] = React.useState(0);
  const Contacts = useSelector((state) => state.contact.contactData);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(getContact());
  }, []);
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "1em",
        marginTop: "2em",
      }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          width: "25%",
          borderBottom: "2px solid #B4880B",
          color: "#003895",
          alignItems: "center",
          margin: "1em",
        }}>
        Contact Details
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        spacing={3}
        style={{ marginTop: "16px" }}>
        <Grid
          item
          xs={6}
          style={{ textAlign: "left", marginLeft: "1em" }}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            onChange={handleSearchInputChange}
          />
        </Grid>
      </Grid>
      <TableContainer sx={{ marginTop: "1em" }}>
        <Table
          stickyHeader
          aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Contacts?.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.query}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.message}</TableCell>
                  <TableCell>
                    <Button variant="outlined">Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Contacts?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
