import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { CLIENT_MSG } from "../../constants/actionTypes";
import {
  addInternationalResources,
  deleteInternationalResources,
  getInternationalResources,
} from "../../actions/assets";
import { API_URL } from "../../api";

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

export default function InternatinalResource() {
  const classes = useStyles();
  const fileUploadRef = useRef();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const resources = useSelector((state) => state.assets.internationalResources);
  const [internationalResources, setInternationalResources] = useState({
    title: "",
    image: { preview: "", data: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInternationalResources((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", internationalResources.title);
    formData.append("image", internationalResources.image.data);
    dispatch(addInternationalResources(formData));
    setInternationalResources({ title: "", image: { preview: "", data: "" } });
  };
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size 5mb
    if (file.size > 5000000) {
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

    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setInternationalResources({ ...internationalResources, image: img });
  };

  // Delete Dialog
  const [openDel, setOpenDel] = useState(false);
  const handleClickOpenDel = (id) => {
    setOpenDel(true);
    setDeleteId(id);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
    setDeleteId(null);
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

  useEffect(() => {
    dispatch(getInternationalResources());
  }, []);
  return (
    <>
      <Box sx={{ margin: "1em", borderRadius: "2em" }}>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              width: "25%",
              borderBottom: "2px solid #B4880B",
              color: "#003895",
              alignItems: "center",
              margin: "1em",
            }}
          >
            International Resources
          </Typography>
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
            }}
          >
            <Grid
              container
              spacing={1}
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Grid item xs={12} sm={4}>
                <TextField
                  type="text"
                  required
                  id="title"
                  name="title"
                  value={internationalResources.title}
                  label="Enter Resource Name"
                  fullWidth
                  autoComplete="given-name"
                  onChange={handleChange}
                  variant="standard"
                />
              </Grid>
              <Box>
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
                    accept: "image/jpeg,image/png,image/jpg,application/pdf",
                  }}
                  onChange={handleFileRead}
                  onClick={() => fileUploadRef.current.click()}
                />
                {internationalResources.image.preview && (
                  <img
                    src={internationalResources.image.preview}
                    width="100"
                    height="100"
                    alt="gallery"
                  />
                )}
              </Box>
            </Grid>

            <Grid
              container
              justifyContent="center"
              marginTop={4}
              className={classes.Btn}
            >
              <Grid item xs={2}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Box marginLeft={3}>
                  <Button type="button" variant="outlined">
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>

        <Box sx={{ marginTop: "2rem" }}>
          <TableContainer component={Paper} elevation={11}>
            <Table fullWidth aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width={"10px"}>S. NO</StyledTableCell>{" "}
                  <StyledTableCell
                    minWidth={"100px"}
                    maxWidth={"100px"}
                    align="center"
                  >
                    Resource Link
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Resource Title
                  </StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resources?.map((row, index) => (
                  <>
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        minWidth={"150px"}
                        maxWidth={"150px"}
                        height={"100px"}
                      >
                        <a href={API_URL + row?.path} target="_blank">
                          {API_URL + row?.path}
                        </a>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {row.title}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <IconButton
                          onClick={() => {
                            handleClickOpenDel(row.id);
                          }}
                        >
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
              dispatch(deleteInternationalResources(deleteId));
              handleCloseDel();
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
