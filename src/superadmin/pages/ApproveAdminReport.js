import React, { useEffect, useState } from "react";
import { Button, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PreviewIcon from "@mui/icons-material/Preview";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { AllAdminReport, clubAdminReport } from "../../actions/clubs";
import ClubReports from "./ClubReports";
import { CLIENT_MSG, CLUB_ADMIN_REPORT } from "../../constants/actionTypes";
import { downloadClubRanking, downloadReport } from "../../actions/activity";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const available_months = [
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
];
// Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1d3d7c",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(sNO, id, name) {
  return { sNO, id, name };
}

const rows = [
  createData(1, "Id", "Name"),
  createData(1, "Id", "Name"),
  createData(1, "Id", "Name"),
];

function ApproveAdminReport() {
  const [clubId, setClubId] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedMonth, setSelectedMonth] = useState(false);
  const [monthIndex, setMonthIndex] = useState();
  const [selectedClub, setSelectedClub] = useState('');
  const dispatch = useDispatch();
  const allAdminReport = useSelector((state) => state.clubs.allAdminReport);

  const handleClickOpen = (clubId,clubName) => {
    if (!monthIndex) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Please select month",
          status: 400,
        },
      });
      return;
    }
    dispatch(clubAdminReport(clubId, monthIndex));
    setSelectedClub(clubName);
    setClubId(clubId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Box
        elevation={3}
        sx={{
          minWidth: 345,
          margin: "auto",
          background: " rgba( 255, 255, 255, 0.7 )",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 5.5px )",
          borderRadius: "20px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          padding: "77px 2rem",
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          color={"#1d3d7c"}
          textAlign={"center"}
          marginBottom={"1rem"}
        >
          Approve Admin Report
        </Typography>
        <Box>
          <Box sx={{ maxWidth: "500px", marginBottom: "2rem" }}>
            <Grid item xs={6} sx={{display:"flex", gap:"1em", justifyContent: "space-between"}} >
              <TextField
                id="Month"
                select
                value={selectedMonth}
                fullWidth
                label="Select Month "
                onChange={(e) => {
                  setSelectedMonth(e.target.value);
                  const selectedIndexes = monthNames
                    .map((month, index) =>
                      month === e.target.value ? index + 1 : -1
                    )
                    .filter((index) => index !== -1);
                  dispatch(AllAdminReport(selectedIndexes[0]));
                  setMonthIndex(selectedIndexes[0]);
                }}
              >
                {available_months.map((item, index) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
             
              <Button
              variant="contained"
              size="medium"
              color="primary"
              style={{width:"230px"}}
              onClick={() => {
                dispatch(downloadReport(allAdminReport,selectedMonth));
              }}
            >
              Download Reports
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              style={{width:"230px" }}
              onClick={() => {
                dispatch(downloadClubRanking());
              }}
            >
              Download Ranking
            </Button>
            </Grid>
           
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginTop: "2rem" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#1d3d7c",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  Reported Club
                </Typography>
                <TableContainer component={Paper} elevation={11}>
                  <Table fullWidth aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          minWidth={"100px"}
                          maxWidth={"100px"}
                          align="center"
                        >
                          Club Id
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Club Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Admin Points
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Activity Points
                        </StyledTableCell>
                        <StyledTableCell align="center">View</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {allAdminReport?.reportedClubs.map((row) => (
                        <>
                          <StyledTableRow key={row.clubId}>
                            <StyledTableCell component="th" scope="row">
                              {row.clubId}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.clubName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.adminstars}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.activityStar}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <IconButton
                                onClick={() => {
                                  handleClickOpen(row.clubId,row.clubName);
                                }}
                              >
                                <PreviewIcon />
                              </IconButton>
                            </StyledTableCell>
                          </StyledTableRow>
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginTop: "2rem" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#1d3d7c",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  Non Reported Club
                </Typography>
                <TableContainer component={Paper} elevation={11}>
                  <Table fullWidth aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          minWidth={"100px"}
                          maxWidth={"100px"}
                          align="center"
                        >
                          Club Id
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Club Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Admin Points
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Activity Points
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {allAdminReport?.nonReportedClubs.map((row) => (
                        <>
                          <StyledTableRow key={row.clubId}>
                            <StyledTableCell component="th" scope="row">
                              {row.clubId}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.clubName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.adminstars}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.activityStar}
                            </StyledTableCell>
                          </StyledTableRow>
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={() => {
          handleClose();
          dispatch({ type: CLUB_ADMIN_REPORT, payload: {} });
        }}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Club Admin Reports of {selectedClub} for {selectedMonth}</DialogTitle>
        <DialogContent>
          <ClubReports clubId={clubId} month={monthIndex}/>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              dispatch({ type: CLUB_ADMIN_REPORT, payload: {} });
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ApproveAdminReport;
