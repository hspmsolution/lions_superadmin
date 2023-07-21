import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  Btn: {
    "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0.5rem",
      padding: "10px 16px 10px 16px",
    },
    "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0.5rem",
      padding: "10px 16px 10px 16px",
    },
  },
});

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Transgender" },
];

export default function DownloadResource() {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log("change");
  };
  const submitDetails = (e) => {
    e.preventDefault();
  };

  // Delete Dialog
  const [openDel, setOpenDel] = useState(false);
  const handleClickOpenDel = () => {
    setOpenDel(true);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };
  // Dowload Resource Table
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

  function createData(sNO, resource, resTitle) {
    return { sNO, resource, resTitle };
  }
  const rows = [
    createData(1, "Resource", "Resource Title"),
    createData(2, "Resource", "Resource Title"),
    createData(3, "Resource", "Resource Title"),
    createData(4, "Resource", "Resource Title"),
    createData(5, "Resource", "Resource Title"),
  ];
  return (
    <>
      <Box sx={{ margin: "1em", borderRadius: "2em" }}>
        <form onSubmit={submitDetails}>
          <Box
            bgcolor="white"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mx="auto"
            borderRadius="5px"
            sx={{
              backgroundColor: "White",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: "1em",
              borderRadius: "2em",
            }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                width: "25%",
                borderBottom: "2px solid #B4880B",
                color: "#003895",
                alignItems: "center",
                margin: "1em",
              }}>
              Download Resources
            </Typography>

            <Grid
              container
              spacing={4}>
              <Grid
                item
                xs={12}
                sm={4}>
                <TextField
                  type="text"
                  required
                  id="resourceName"
                  //value={user.firstName}
                  name="resourceName"
                  label="Enter Resource Name"
                  fullWidth
                  autoComplete="given-name"
                  onChange={handleChange}
                  variant="standard"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}>
                <TextField
                  type="file"
                  required
                  id="uplaodFile"
                  //value={user.middleName}
                  name="uplaodFile"
                  label="Uplaod File"
                  fullWidth
                  onChange={handleChange}
                  variant="standard"
                />
              </Grid>
              {/* <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="lastName"
                //value={user.lastName}
                name="lastName"
                label="Enter last Name"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="email"
                type="email"
                //value={user.email}
                name="email"
                label="Enter email"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="phone"
                type="tel"
                name="phone"
                //value={user.phone}
                label="Enter Phone Number"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="designation"
                name="designation"
                label="Enter designation"
                fullWidth
                //value={user.designation}
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="clubName"
                //value={user.clubName}
                name="clubName"
                label="Enter club Name"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="dob"
                //value={user.dob}
                name="dob"
                label="Enter Date Of Birth"
                fullWidth
                variant="standard"
                type="date"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="address1"
                //value={user.address1}
                name="address1"
                label="Enter Address line 1"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="address2"
                //value={user.address2}
                name="address2"
                label="Enter address line 2"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                id="city"
                name="city"
                //value={user.city}
                label="Enter City"
                fullWidth
                required
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="state"
                name="state"
                // value={user.state}
                label="Enter state"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                required
                id="postalCode"
                name="postalCode"
                type="number"
                //value={user.postalCode}
                label="Enter postalCode"
                fullWidth
                onChange={handleChange}
                variant="standard"
              />
            </Grid> */}

              {/* <Grid
              item
              xs={12}
              sm={4}>
              <TextField
                id="gender"
                select
                label="Select Gender"
                //value={user.gender}
                fullWidth
                name="gender"
                onChange={handleChange}>
                {gender?.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid> */}
            </Grid>

            <Grid
              container
              justifyContent="center"
              marginTop={4}
              className={classes.Btn}>
              <Grid
                item
                xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary">
                  Submit
                </Button>
              </Grid>
              <Grid
                item
                xs={2}>
                <Box marginLeft={3}>
                  <Button
                    type="button"
                    variant="outlined">
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>

        <Box sx={{ marginTop: "2rem" }}>
          <TableContainer
            component={Paper}
            elevation={11}>
            <Table
              fullWidth
              aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width={"10px"}>S. NO</StyledTableCell>{" "}
                  <StyledTableCell
                    minWidth={"100px"}
                    maxWidth={"100px"}
                    align="center">
                    Resource
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Resource Title
                  </StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <>
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row">
                        {row.sNO}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        minWidth={"150px"}
                        maxWidth={"150px"}
                        height={"100px"}>
                        {/* {images?.map((item, index) => (
                      <img
                        alt={`img${index}`}
                        src={`${API_URL}${item?.image}`}
                      />
                    ))} */}
                        {row.resource}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {row.resTitle}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <IconButton onClick={handleClickOpenDel}>
                          <DeleteIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>{" "}
        </Box>
      </Box>

      <Box sx={{ margin: "1em", borderRadius: "2em" }}>
        <form onSubmit={submitDetails}>
          <Box
            bgcolor="white"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mx="auto"
            borderRadius="5px"
            sx={{
              backgroundColor: "White",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: "1em",
              borderRadius: "2em",
            }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                width: "25%",
                borderBottom: "2px solid #B4880B",
                color: "#003895",
                alignItems: "center",
                margin: "1em",
              }}>
              International Resources
            </Typography>

            <Grid
              container
              spacing={4}>
              <Grid
                item
                xs={12}
                sm={4}>
                <TextField
                  type="text"
                  required
                  id="resourceLink"
                  //value={user.firstName}
                  name="resourceLink"
                  label="Enter Resource Name"
                  fullWidth
                  autoComplete="given-name"
                  onChange={handleChange}
                  variant="standard"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}>
                <TextField
                  type="text"
                  required
                  id="resourceLink"
                  //value={user.firstName}
                  name="resourceLink"
                  label="Enter Resource Link"
                  fullWidth
                  autoComplete="given-name"
                  onChange={handleChange}
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              marginTop={4}
              className={classes.Btn}>
              <Grid
                item
                xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary">
                  Submit
                </Button>
              </Grid>
              <Grid
                item
                xs={2}>
                <Box marginLeft={3}>
                  <Button
                    type="button"
                    variant="outlined">
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>

        <Box sx={{ marginTop: "2rem" }}>
          <TableContainer
            component={Paper}
            elevation={11}>
            <Table
              fullWidth
              aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width={"10px"}>S. NO</StyledTableCell>{" "}
                  <StyledTableCell
                    minWidth={"100px"}
                    maxWidth={"100px"}
                    align="center">
                    Resource
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Resource Title
                  </StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <>
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row">
                        {row.sNO}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        minWidth={"150px"}
                        maxWidth={"150px"}
                        height={"100px"}>
                        {/* {images?.map((item, index) => (
                      <img
                        alt={`img${index}`}
                        src={`${API_URL}${item?.image}`}
                      />
                    ))} */}
                        {row.resource}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {row.resTitle}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <IconButton onClick={handleClickOpenDel}>
                          <DeleteIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Delete Dialog */}
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
                onClick={handleCloseDel}
                autoFocus
                color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
