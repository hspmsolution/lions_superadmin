import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, Button } from "@mui/material";

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
      </Box>
    </>
  );
}
