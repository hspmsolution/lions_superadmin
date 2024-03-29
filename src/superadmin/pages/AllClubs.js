import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  getClubs,
  deleteClub,
  clubInfo,
  getClubActivites,
  getClubNews,
  editClubInfo,
} from "../../actions/clubs";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import AddClubDialog from "./AddClubDialog";
import { CLUB_ADMIN_REPORT } from "../../constants/actionTypes";
import AddClub from "./AddClub";

const columns = [
  { id: "id", label: "SrNo.", minWidth: 60 },
  { id: "clubId", label: "ClubId", minWidth: 100 },
  { id: "clubName", label: "ClubName", minWidth: 100 },
  { id: "adminStars", label: "AdminStars", minWidth: 100 },
  { id: "lastUpdate", label: "LastUpdate", minWidth: 100 },
  { id: "View", label: "View", minWidth: 100 },
  { id: "Edit", label: "Edit", minWidth: 100 },
  { id: "Delete", label: "Delete", minWidth: 100 },
];

export default function AllClubs() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClubId, setSelectedClubId] = useState();

  const dispatch = useDispatch();

  const Clubs = useSelector((state) => {
    if (searchTerm.trim() === "") {
      return state.clubs.registeredClubs;
    } else {
      const filteredClubs = state.clubs.registeredClubs.filter(
        (club) =>
          club.clubName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          club.clubId.toString().includes(searchTerm.toLowerCase())
      );
      return filteredClubs;
    }
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(getClubs());
  }, []);

  // Club Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (clubId) => {
    dispatch(clubInfo(clubId));
    dispatch(getClubActivites(clubId));
    dispatch(getClubNews(clubId));
    setSelectedClubId(clubId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({ type: CLUB_ADMIN_REPORT, payload: {} });
  };

  // Delete Dialog
  const [openDel, setOpenDel] = React.useState(false);

  const handleClickOpenDel = (clubId) => {
    setOpenDel(true);
    setSelectedClubId(clubId);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  // Edit Dialog
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = (clubId) => {
    dispatch(editClubInfo(clubId));
    setOpenEdit(true);
  }

  const handleCloseEdit = () => {
    setOpenEdit(false);
  }

  return (
    <>
     <AddClub/>
      <Paper
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
          All Clubs
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
              label="Search Club"
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
              {Clubs?.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row, index) => {
                return (
                  <>
                    <TableRow>
                      <TableCell>{index + 1 + rowsPerPage * page}</TableCell>
                      <TableCell>{row.clubId}</TableCell>
                      <TableCell>{row.clubName}</TableCell>
                      <TableCell>{row.adminstars}</TableCell>
                      <TableCell>{row.lastupdated?.slice(0, 10)}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            handleClickOpen(row.clubId);
                          }}
                        >
                          View
                        </Button>
                      </TableCell>

                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            handleClickOpenEdit(row.clubId);
                          }}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            handleClickOpenDel(row.clubId);
                          }}
                          variant="outlined"
                          sx={{ color: "red" }}
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
          count={Clubs?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <AddClubDialog open={open} close={handleClose} clubId={selectedClubId} />

      {/* Dialog */}
      <Dialog
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        size="medium"
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
              dispatch(deleteClub(selectedClubId));
              setOpenDel(false);
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>



      {/* Dialog to open club Edit */}
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AddClub isEdit={true} handleCloseEdit={handleCloseEdit}/>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
