import React from 'react';
import {Button,Grid,TextField,Typography,Box} from '@mui/material';
import { makeStyles } from "@mui/styles";
import Activities from "./Activities";
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
const submitdetails=(e)=>{
    console.log(e)
}
export default  function AddActivity() {
    const classes=useStyles();
  return (
   <>
    <form onSubmit={submitdetails}>
      
        <Box bgcolor="white" p={3} borderRadius={4}>
        <Typography variant="h6" gutterBottom className={classes.heading}>
           Add Activty
          </Typography>
       <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
       <Box sx={{display:'flex',flexDirection:'column',marginTop:'1em',width:'40%'}}>
        <Typography className={classes.title}>Enter Activty Type</Typography>
        <TextField
                required
                id="activitytype"
                name="activitytype"
                select
                fullWidth
                variant="outlined"
                className={classes.label}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',marginTop:'1em',width:'40%'}}>
        <Typography className={classes.title}>Enter SubActivity Type</Typography>
        <TextField
                required
                id="subActivity"
                name="subActivity"
                select
                fullWidth
                variant="outlined"
                className={classes.label}
            />
            </Box>

       </Box>
       <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
       <Box sx={{display:'flex',flexDirection:'column',marginTop:'1em',width:'40%'}}>
        <Typography className={classes.title}>Enter Category Type</Typography>
        <TextField
                required
                id="category"
                name="category"
                select
                fullWidth
                variant="outlined"
                className={classes.label}
            />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',marginTop:'1em',width:'40%'}}>
        <Typography className={classes.title}>Enter Placeholder</Typography>
        <TextField
                required
                id="placeholder"
                name="placeholder"
                type="text"
                fullWidth
                variant="outlined"
                className={classes.label}
            />
            </Box>

       </Box>
     
   
          <Grid container justifyContent="center" >
            <Button type="submit" variant="contained" className={classes.btn}>
              Add Activity
            </Button>
          </Grid>
        </Box>
      </form>
      <Activities/>
      </>
   
  )
}

