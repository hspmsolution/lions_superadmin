import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Box,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Activities from "./Activities";
import {
  addActivity,
  getActivity,
} from "../../actions/activity";

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
const activityDetail = {
  activityType: "",
  activitySubType: "",
  activityCategory: "",
  placeHolderValue: "",
  beneficiaries: "",
  star: "",
};

export default function AddActivity() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activity, setActivity] = useState(activityDetail);
  const type = useSelector((state) => state.activity.type);

  useEffect(() => {
    dispatch(getActivity());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  const submitdetails = (e) => {
    e.preventDefault();
    console.log(activity, "activity");
    dispatch(addActivity(activity));
    setActivity(activityDetail);
  };
  return (
    <>
      <form onSubmit={submitdetails}>
        <Box
          bgcolor="white"
          p={3}
          borderRadius={4}
          component={Paper}
          elevation={3}
        >
          <Typography variant="h6" gutterBottom className={classes.heading}>
            Add Activity
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
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
              <Typography className={classes.title}>
                Enter Activity Type
              </Typography>
              <TextField
                id="activityType"
                value={activity.activityType}
                select
                required
                fullWidth
                name="activityType"
                // label="Select Activity Type"
                onChange={(e) => {
                  handleChange(e);
                }}
                className={classes.label}
              >
                {type.map((getType, index) => (
                  <MenuItem key={index} value={getType.type}>
                    {getType.type}
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
              <Typography className={classes.title}>
                Enter SubActivity Type
              </Typography>
              <TextField
                id="activitySubType"
                fullWidth
                required
                name="activitySubType"
                //  label="Activity Subtype"
                value={activity.activitySubType}
                onChange={(e) => {
                  handleChange(e);
                }}
                className={classes.label}
              ></TextField>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
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
              <Typography className={classes.title}>
                Enter Category Type
              </Typography>
              <TextField
                id="activityCategory"
                fullWidth
                required
                name="activityCategory"
                // label="Activity Category Type"
                value={activity.activityCategory}
                onChange={handleChange}
                className={classes.label}
              ></TextField>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
                width: "40%",
              }}
            >
              <Typography className={classes.title}>
                Enter Placeholder
              </Typography>
              <TextField
                required
                id="placeholder"
                name="placeHolderValue"
                fullWidth
                value={activity.placeHolderValue}
                variant="outlined"
                onChange={handleChange}
                className={classes.label}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          ></Box>

          <Grid container justifyContent="center">
            <Button type="submit" variant="contained" className={classes.btn}>
              Add Activity
            </Button>
          </Grid>
        </Box>
      </form>
      <Activities />
    </>
  );
}
