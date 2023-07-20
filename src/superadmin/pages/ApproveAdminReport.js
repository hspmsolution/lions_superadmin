import React, { useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Divider,
  Typography,
  Icon,
  Box,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Card, CardMedia, CardContent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch, useSelector } from "react-redux";
import { clubsReporting } from "../../actions/approveAdminReport";

const months = [
  "January 2023",
  "February 2023",
  "March 2023",
  "April 2023",
  "May 2023",
  "June 2023",
  "July 2023",
  "August 2023",
  "September 2023",
  "October 2023",
  "November 2023",
  "December 2023",
];

function ApproveAdminReport() {
  const [club, setClub] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const dispatch = useDispatch();
  const clubReporting = useSelector(
    (state) => state.adminReporting.clubReporting
  );
  console.log(clubReporting);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(clubsReporting());
  }, []);

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
        }}>
        <Typography
          variant="h3"
          color={"#1d3d7c"}
          textAlign={"center"}
          marginBottom={"1rem"}>
          Approve Admin Report
        </Typography>
        <Box>
          <Box sx={{ width: "500px", marginBottom: "2rem" }}>
            <TextField
              id="search"
              label="Search Club"
              variant="outlined"
              size="small"
              onChange={handleSearchInputChange}
            />
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Club</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={club}
                label="Select Club"
                onChange={handleChange}>
                <MenuItem value={"Zone01"}>Club 01</MenuItem>
                <MenuItem value={"Zone02"}>Club 02</MenuItem>
                <MenuItem value={"Zone03"}>Club 03</MenuItem>
                <MenuItem value={"Zone04"}>Club 04</MenuItem>
              </Select>
            </FormControl> */}
          </Box>

          <TableContainer component={Paper}>
            <Table aria-label="news table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club Id</TableCell>
                  {months.map((month) => (
                    <TableCell key={month}>{month}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={club.clubId}>
                  <TableCell>{1}</TableCell>
                  <TableCell>clubName</TableCell>
                  <TableCell>clubId</TableCell>
                  <TableCell>
                    {club.month1 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month2 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month3 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month4 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month5 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month6 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month7 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month8 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month9 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month10 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month11 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                  <TableCell>
                    {club.month12 === "0" ? (
                      <DisabledByDefaultIcon color="error" />
                    ) : (
                      <CheckBoxIcon color="success" />
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* <TableContainer component={Paper}>
            <Table aria-label="news table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club Id</TableCell>
                  {months.map((month) => (
                    <TableCell key={month}>{month}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {clubReporting.map((club, index) => (
                  <TableRow key={club.clubId}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{club.clubName}</TableCell>
                    <TableCell>{club.clubId}</TableCell>
                    <TableCell>
                      {club.month1 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month2 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month3 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month4 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month5 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month6 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month7 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month8 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month9 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month10 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month11 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                    <TableCell>
                      {club.month12 === "0" ? (
                        <DisabledByDefaultIcon color="error" />
                      ) : (
                        <CheckBoxIcon color="success" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}

          {/* Dialog */}

          <Dialog
            open={open}
            onClose={handleClose}>
            <DialogTitle>Optional sizes</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}

export default ApproveAdminReport;
