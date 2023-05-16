import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {Button,Grid,TextField,Typography,Box} from '@mui/material';
import { makeStyles } from "@mui/styles";
import AllClubs from "./AllClubs";
import {addClubs} from "../../actions/clubs";
import { useState } from 'react';
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

export default  function AddClub() {
    const classes=useStyles();
    const dispatch = useDispatch();
  const [club, setClub] = useState({ clubName: '', clubId: '' });

  const handleInputChange = (e) => {
    setClub({ ...club, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    dispatch(addClubs(club)); 
    setClub({ clubName: '', clubId: '' }); 
  };
  return (
   <>
   <form onSubmit={submitDetails}>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography variant="h6" gutterBottom className={classes.heading}>
            Add Club
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1em', width: '40%' }}>
              <Typography className={classes.title}>Club Name</Typography>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '1em', width: '40%' }}>
              <Typography className={classes.title}>Club ID</Typography>
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

  )
}

