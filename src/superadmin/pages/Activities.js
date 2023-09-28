import React, { useState, useEffect } from "react";
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
import { getActivities,deleteActivityType } from "../../actions/activity";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const columns = [
  { id: "id", label: "SrNo.", minWidth: 60 },
  { id: "type", label: "Activity Type", minWidth: 100 },
  { id: "subtype", label: "Activity SubType", minWidth: 100 },
  { id: "category", label: "Activty Category", minWidth: 100 },
  { id: "placeholder", label: "Place Holder", minWidth: 100 },
  { id: "star", label: "Points", minWidth: 100 },
  { label: "Delete", minWidth: 100 },
];



export default function Activities() {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const Activity = useSelector((state) => {
    if (searchTerm.trim() === "") {
      return state.activity.allActivity;
    } else {
      const filteredActivity = state.activity.allActivity.filter(
        (activity) =>
          activity.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          activity.subtype?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          activity.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredActivity;
    }
  });

  useEffect(() => {
    dispatch(getActivities());
  }, []);

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

  // Delete Dialog
  const [openDel, setOpenDel] = React.useState(false);
  const [delId, setDelId] = React.useState(null);
  const handleClickOpenDel = (id) => {
    setOpenDel(true);
    setDelId(id);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
    setDelId(null);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "1em",
        marginTop: "2em",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          width: "25%",
          borderBottom: "2px solid #B4880B",
          color: "#003895",
          alignItems: "center",
          margin: "1em",
        }}
      >
        All Activities
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        spacing={3}
        style={{ marginTop: "16px" }}
      >
        <Grid item xs={6} style={{ textAlign: "left", marginLeft: "1em" }}>
          <TextField
            id="search"
            label="Search Activty"
            variant="outlined"
            size="small"
            onChange={handleSearchInputChange}
          />
        </Grid>
      </Grid>
      <TableContainer sx={{ marginTop: "1em" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Activity?.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row, index) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{(page * rowsPerPage) + index+1}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.subtype}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.placeholder}</TableCell>
                    <TableCell>{row.star}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          handleClickOpenDel(row.id);
                        }}
                        sx={{ color: "red" }}
                        variant="outlined"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Activity?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete? This action cannot be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel}>Cancel</Button>
          <Button
            onClick={() => {
              handleCloseDel();
              dispatch(deleteActivityType(delId));
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
