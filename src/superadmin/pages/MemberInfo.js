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
import { getMembers, memberDetails, updateMemberInfo } from "../../actions/members";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import ClubForm from "../../Forms/ClubForm";
import ProfileForm from "../../Forms/ProfileForm";
import FinalDetails from "../../Forms/FinalDetails";
import { Stepper, Step, StepLabel } from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import { RESET_MEMBER_INFO } from "../../constants/actionTypes";
import { set } from "lodash";

const columns = [
  { id: "index", label: "SrNo.", minWidth: 60 },
  { id: "id", label: "MemberID.", minWidth: 60 },
  { id: "clubName", label: "ClubName", minWidth: 100 },
  { id: "clubId", label: "ClubId", minWidth: 100 },
  { id: "title", label: "Designation", minWidth: 100 },
  { id: "fullName", label: "Name", minWidth: 100 },
  { id: "address", label: "Address", minWidth: 100 },
  { id: "city", label: "City", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "spouseName", label: "Spouse Name", minWidth: 100 },
  { id: "dob", label: "DOB", minWidth: 100 },
  { id: "gender", label: "Gender", minWidth: 100 },
  { id: "occupation", label: "Occupation", minWidth: 100 },
 { label: "Edit", minWidth: 100 },
  { label: "Delete", minWidth: 100 },
];


// Dialog
const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  stepBtn: {
    background: "#F2F2F2",
    border: "none",
    borderRadius: "5px",
    padding: "20px",
    justifyContent: "space-evenly",
    boxShadow: "0px 0px 5px #BFBFBF",
    "& .MuiStepConnector-root": {
      display: "none",
    },
    "& .MuiStepIcon-root": {
      fontSize: "1.5rem",
    },
    "& .MuiStepLabel-label": {
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "white",
    },
  },
  activeStep: {
    color: "white",
    background: "#0077C0",
    "& .MuiStepIcon-root": {
      color: "#0077C0",
    },
    padding: "10px 30px 10px 30px",
    borderRadius: "4px",
  },
  inactiveStep: {
    color: "#F2F2F2",
    background: "#49A5FF",
    "& .MuiStepIcon-root": {
      color: "#49A5FF",
    },
    padding: "10px 30px 10px 30px",
    borderRadius: "4px",
  },
  totalPoints: {
    marginRight: "8px",
    display: "flex",
    alignItems: "baseline",
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const steps = ["Club Information", "Personal Information", "Final Details"];

export default function MemberInfo() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const memberInfo = useSelector((state) => state.members.memberInfo);

  const Members = useSelector((state) => {
    if (searchTerm.trim() === "") {
      return state.members.memberData;
    } else {
      const filteredMembers = state.members.memberData.filter((members) =>
        members.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        members.id?.toString().includes(searchTerm.toLowerCase()) ||
        members.clubName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        members.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        members.clubId?.toString().includes(searchTerm.toLowerCase()) ||
        members.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredMembers;
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
    dispatch(getMembers());
  }, []);

  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    dispatch(memberDetails(id))
    setOpen(true);
  };

  const handleClose = () => {
    setActiveStep(0);
    setOpen(false);
    dispatch({
      type:RESET_MEMBER_INFO
    });
  };

  const classes = useStyles();



  // Go to next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Go to previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Get form component for current step
  const getStepForm = (isEdit=true) => {
    switch (activeStep) {
      case 0:
        return <ClubForm isEdit />;
      case 1:
        return <ProfileForm isEdit/>;
      case 2:
        return <FinalDetails isEdit/>;
      default:
        return null;
    }
  };

  // Submit form
  const handleSubmit = () => {
    dispatch(updateMemberInfo(memberInfo,handleClose))
    console.log("submitted");
  };

  // Delete Dialog
  const [openDel, setOpenDel] = React.useState(false);

  const handleClickOpenDel = () => {
    setOpenDel(true);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  return (
    <>
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
          Member Details
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
              label="Search"
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
              {Members?.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row, index) => {
                return (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.clubName}</TableCell>
                    <TableCell>{row.clubId}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.spouseName}</TableCell>
                    <TableCell>{row.dob?.slice(0, 10)}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.occupation}</TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={()=>{handleClickOpen(row.id)}}>
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={handleClickOpenDel}
                        variant="outlined">
                        Delete
                      </Button>
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
          count={Members?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Dialog */}
      <Dialog maxWidth={"none"} open={open} onClose={handleClose}>
        <DialogTitle>Edit Member Details</DialogTitle>
        <DialogContent
          sx={{
            flexGrow: 1,
            width: "100%",
            width: "1000px",
          }}
        >
          <div className={classes.root}>
            <Stepper className={classes.stepBtn} activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step
                  key={step}
                  className={
                    activeStep === index
                      ? classes.activeStep
                      : classes.inactiveStep
                  }
                >
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Step content */}
            <Paper elevation={3} style={{ padding: "20px" }}>
              {getStepForm()}

              {/* Buttons */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  style={{ marginRight: "10px" }}
                >
                  Back
                </Button>

                {activeStep === steps.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                  >
                    Next
                  </Button>
                )}
              </div>
            </Paper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/*Delete Dialog */}
      <Dialog
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
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
              setOpenDel(false);
            }}
            autoFocus
            color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
