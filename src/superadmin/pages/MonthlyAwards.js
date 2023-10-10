import React, { useRef, useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { awardReporting } from "../../actions/activity";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { tableCellClasses } from "@mui/material/TableCell";
import { API_URL } from "../../api";
import { deleteAward,getAwards } from "../../actions/activity";

import {
  Divider,
  Table,
  TextField,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

const useStyles = makeStyles({
  heading: {
    width: "fit-content",
    borderBottom: "2px solid #B4880B",
    color: "#003895",
    "@media (max-width: 600px)": { width: "100%", textAlign: "center" },
  },
  grid: {
    marginTop: "0px",
    width: "80%",
    "@media (max-width: 600px)": { width: "100%" },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#003895",
    fontSize: "0.6em",
    "@media (max-width: 600px)": {
      alignContent: "flex-start",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  label: {
    "& .css-1fi1ijh-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "1em",
    },
  },
  btn: {
    margin: "1rem",
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

const initialData = {
  awardTitle: "",
  date: "",
  description: "",
  image: { preview: "", data: "" },
};
export default function MontlyAwards() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileUploadRef = useRef();
  const [awardData, setawardData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const awards = useSelector((state) => state.activity.awards);

  const handleChange = (e) => {
    setawardData({ ...awardData, [e.target.name]: e.target.value });
  };

  // Function to handle file read
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size
    if (file.size > 500000) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Please choose a file smaller than 500kb",
          status: 400,
        },
      });
      event.target.value = "";
      return;
    }
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg"
    ) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: "file type not supported", status: 400 },
      });
      event.target.value = "";
      return;
    }

    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setawardData({ ...awardData, image: img });
  };

  const resetForm = () => {
    setawardData(initialData);
  };
  const handleLoading = () => {
    setIsLoading(false);
  };

  const submitDetails = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("awardTitle", awardData.awardTitle);
    formData.append("date", awardData.date);
    formData.append("description", awardData.description);
    formData.append("image", awardData.image.data);
    setIsLoading(true);
    dispatch(awardReporting(formData, resetForm, handleLoading));
  };

  // Delete Dialog

  const [openDel, setOpenDel] = React.useState(false);
  const [selectId, setSelectId] = useState(0);
  const handleClickOpenDel = (id) => {
    setOpenDel(true);
    setSelectId(id);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
    setSelectId(0);
  };

   useEffect(()=>{
    dispatch(getAwards())
   },[])

  return (
    <>
      <form onSubmit={submitDetails}>
        <Box bgcolor="white" p={3} margin={"2rem 0"} borderRadius={4}>
          <Typography variant="h6" gutterBottom className={classes.heading}>
            Award Information
          </Typography>
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={12} lg={6} className={classes.title}>
              <Typography>Title Of Award</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                required
                id="awardTitle"
                name="awardTitle"
                value={awardData.awardTitle}
                label="Enter award Title"
                type="text"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={handleChange}
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={12} lg={6} className={classes.title}>
              <Typography>Date Of Award</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                required
                id="date"
                name="date"
                value={awardData.date}
                label="Select Date"
                fullWidth
                variant="standard"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={12} lg={6} className={classes.title}>
              <Typography>Description of Award</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                id="description"
                name="description"
                label="Enter Description"
                value={awardData.description}
                type="text"
                variant="standard"
                fullWidth
                required
                onChange={handleChange}
                className={classes.label}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={12} lg={6} className={classes.title}>
              <Typography>Photographs of Award</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                ref={fileUploadRef}
                type="file"
                id="image-upload"
                name="image"
                label="Upload Photo less than 500kb"
                fullWidth
                required
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  accept: "image/jpeg,image/png",
                }}
                onChange={handleFileRead}
                onClick={() => fileUploadRef.current.click()}
              />
              {awardData.image.preview && (
                <img
                  src={awardData.image.preview}
                  width="100"
                  height="100"
                  alt="award"
                />
              )}
            </Grid>
          </Grid>
          <Grid container justifyContent="center" gap={4}>
            <Grid item>
              <Button type="submit" variant="contained" className={classes.btn}>
                {isLoading ? <CircularProgress /> : "Submit"}
              </Button>
            </Grid>
            <Grid item>
              <Box>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={resetForm}
                  className={classes.btn}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
      <Box bgcolor={"white"} p={3} borderRadius={4}>
        <Typography variant="h6">Past Awards</Typography>
        <Grid
          container
          justifyContent="space-between"
          spacing={3}
          style={{ marginTop: "16px" }}
        ></Grid>
        <TableContainer component={Paper}>
          <Table aria-label="news table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Sr No.</StyledTableCell>
                <StyledTableCell>Project Title</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {awards?.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell>{row.title}</StyledTableCell>
                  <StyledTableCell>{row.description}</StyledTableCell>
                  <StyledTableCell>{row.date?.slice(0, 10)}</StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      width: "150px",
                      height: "150px",
                      padding: "0.5rem",
                    }}
                  >
                    <img
                      src={`${API_URL + row?.image}`}
                      srcSet={`${API_URL + row?.image}`}
                      alt={"Awards"}
                    />
                  </StyledTableCell>

                  <StyledTableCell>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => {
                        handleClickOpenDel(row.id);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Delete Dialog */}
        <Dialog
          open={openDel}
          onClose={handleCloseDel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
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
                dispatch(deleteAward(selectId));
                handleCloseDel();
              }}
              autoFocus
              color="error"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
