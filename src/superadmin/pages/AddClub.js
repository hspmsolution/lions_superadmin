import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AllClubs from "./AllClubs";
import { addClubs } from "../../actions/clubs";

import { getSelectRegion, getSelectZone } from "../../actions/members";

const useStyles = makeStyles({
  heading: {
    width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
  },
  grid: {
    marginTop: "0px",
    width: "80%",
  },
  title: {
    color: "#003895",
    fontSize: "1em",
  },
  label: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "1em",
    },
  },
  btn: {
    marginTop: "15px",
    "& .css-12vebo6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
    "& .css-731omg-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "0px 8px 0px 8px",

      padding: "10px 16px 10px 16px",
    },
  },
});

export default function AddClub() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.members.selectRegion);
  const zones = useSelector((state) => state.members.selectZone);
  const [club, setClub] = useState({
    clubName: "",
    clubId: "",
    regionName: "",
    zoneName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedClub = { ...club, [name]: name === "clubName" ? value.toUpperCase() : value };
  
    if (name === "regionName") {
      updatedClub.zoneName = "";
    }
  
    setClub(updatedClub);
  };
  
  

  const submitDetails = (e) => {
    e.preventDefault();
    dispatch(addClubs(club));
    setClub({ clubName: "", clubId: "", regionName: "", zoneName: "" });
  };

  useEffect(() => {
    dispatch(getSelectRegion());
  }, []);
  return (
    <>
      <form onSubmit={submitDetails}>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography variant="h6" gutterBottom className={classes.heading}>
            Add Club
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
                width: "40%",
              }}
            >
              <TextField
                id="region"
                value={club.regionName}
                select
                required
                fullWidth
                name="regionName"
                label=" Select Region "
                onChange={(e) => {
                  dispatch(getSelectZone(e.target.value));
                  handleInputChange(e);
                }}
                // className={classes.label}
              >
                {regions.map((region, index) => (
                  <MenuItem key={index} value={region.regionName}>
                    {region.regionName}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
                width: "40%",
              }}
            >
              <TextField
                id="zone"
                value={club.zoneName}
                select
                fullWidth
                required
                name="zoneName"
                label=" Select Zone"
                onChange={handleInputChange}
                // className={classes.label}
              >
                {zones.map((zone, index) => (
                  <MenuItem key={index} value={zone.zoneName}>
                    {zone.zoneName}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
                width: "40%",
              }}
            >
              {/* <Typography className={classes.title}>Club Name</Typography> */}
              <TextField
                required
                id="ClubName"
                name="clubName"
                type="text"
                label="Enter Club Name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                className={classes.label}
                value={club.clubName}
                onChange={handleInputChange}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
                width: "40%",
              }}
            >
              {/* <Typography className={classes.title}>Club ID</Typography> */}
              <TextField
                required
                id="clubId"
                name="clubId"
                type="number"
                label="Enter Club Id"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                className={classes.label}
                value={club.clubId}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
          <Grid container justifyContent="center">
            <Button type="submit" variant="contained" className={classes.btn}>
              Add Club
            </Button>
          </Grid>
        </Box>
      </form>
      <AllClubs />
    </>
  );
}
