import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../../api";
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
  InputLabel,
  Input,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { updateClubPoints } from "../../actions/clubs";

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

const ClubReports = (props) => {
  const clubAdminReport = useSelector((state) => state.clubs.clubAdminReport);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [points,setPoints] = React.useState();
  
  const handleChange= (e)=>{
    e.target.value = e.target.value.replace(/[+-]/g, "");
    setPoints(e.target.value);
  }
  const handleCloseDialog = () =>{
    setOpenDialog(false);
  }
  const handleOpenDialog = () =>{
    setOpenDialog(true);
  }

  return (
    <>
      {!clubAdminReport.pdfPath && <div>No data found</div>}
      {clubAdminReport.pdfPath && (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ marginTop: "2rem" }}>
                Admin Points {clubAdminReport?.adminstars}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ marginTop: "2rem" }}>
                Total Activity Points {clubAdminReport?.activityStar}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="amount"
                name="amount"
                type="number"
                value={points}
                label="Enter Admin Points"
                variant="outlined"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

            </Grid>
            <Grid item xs={12} md={6}>
            <Button
                onClick={() => {
                  handleOpenDialog()
                }}
                autoFocus
                color="primary"
                variant="contained"
                size="large"
              >
                Debit Admin Points
              </Button>

            </Grid>
            <Grid item xs={12} md={6}>
              <a
                href={API_URL + clubAdminReport.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                View uploaded Report
              </a>
            </Grid>
          </Grid>

          <Grid item xs={12} md={16}>
            <Box sx={{ marginTop: "2rem" }}>
              <TableContainer component={Paper} elevation={11}>
                <Table fullWidth aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                        minWidth={"100px"}
                        maxWidth={"100px"}
                        align="center"
                      >
                        Sr.no
                      </StyledTableCell>
                      <StyledTableCell align="center">Title</StyledTableCell>
                      <StyledTableCell align="center">
                        Admin Points
                      </StyledTableCell>
                      <StyledTableCell align="center">Count</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clubAdminReport?.reports.map((row, index) => (
                      <>
                        <StyledTableRow key={index + 1}>
                          <StyledTableCell component="th" scope="row">
                            {row.titleId}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.title}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.adminstars}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.count}
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </div>
      )}

      {/* Admin points debit confirmation */}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Debit Admin Points</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to debit Admin Points? This action cannot be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={() => {
              dispatch(updateClubPoints({
                clubId: props?.clubId,
                month: props?.month,
                points: points,
                handleCloseDialog: handleCloseDialog
              }));
            }}
            autoFocus
            color="error"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ClubReports;
