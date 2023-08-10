import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../api";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Paper,
  Box,
  Button,
  Icon,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CLIENT_MSG } from "../../constants/actionTypes";
import { useDispatch } from "react-redux";
import { addGallery, getGallery, deleteGallery } from "../../actions/assets";

var galleryDetail = {
  title: "",
  description: "",
  image: { preview: "", data: "" },
};

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

export default function Gallery() {
  const fileUploadRef = useRef();
  const [gallery, setGallery] = useState(galleryDetail);
  const [galleryId, setGalleryId] = useState(null);
  const dispatch = useDispatch();
  const galleryImages = useSelector((state) => state.assets.galleryImages);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGallery((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", gallery.title);
    formData.append("description", gallery.description);
    formData.append("image", gallery.image.data);
    dispatch(addGallery(formData));
    setGallery({ title: "", description: "", image: gallery.image });
  };
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
    setGallery({ ...gallery, image: img });
  };

  // Delete Dialog
  const [openDel, setOpenDel] = useState(false);
  const handleClickOpenDel = (id) => {
    setOpenDel(true);
    setGalleryId(id);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
    setGalleryId(null);
  };

  useEffect(() => {
    dispatch(getGallery());
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          elevation={3}
          sx={{
            minWidth: 345,
            margin: "auto",
            background: " rgba( 255, 255, 255, 0.45 )",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 5.5px )",
            backdropFilter: "blur( 5.5px )",
            borderRadius: "20px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            padding: "77px 99px 87px",
            color: "#fff",
          }}
        >
          <Typography
            variant="h3"
            color={"#1d3d7c"}
            textAlign={"center"}
            marginBottom={"1rem"}
          >
            Gallery
          </Typography>
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
                accept: "image/jpeg,image/png",
              }}
              onChange={handleFileRead}
              onClick={() => fileUploadRef.current.click()}
            />
            {gallery.image.preview && (
              <img
                src={gallery.image.preview}
                width="100"
                height="100"
                alt="gallery"
              />
            )}
          </Box>
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                width: "25%",
                borderBottom: "2px solid #B4880B",
                color: "#003895",
                alignItems: "center",
                margin: "1em",
              }}
            >
              Image Title
            </Typography>
            <TextField
              required
              id="title"
              name="title"
              type="text"
              value={gallery.title}
              label="Enter Image Title"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                width: "25%",
                borderBottom: "2px solid #B4880B",
                color: "#003895",
                alignItems: "center",
                margin: "1em",
              }}
            >
              Image Description
            </Typography>
            <TextField
              required
              id="description"
              name="description"
              type="text"
              value={gallery.description}
              label="Enter Image Title"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {" "}
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "120px",
                color: "#FFF",
                backgroundColor: "#1D3D7C",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                fontSize: "1.12em",
                marginTop: "1em",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </form>

      {/* Table */}
      <Box sx={{ marginTop: "2rem" }}>
        <TableContainer component={Paper} elevation={11}>
          <Table fullWidth aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell width={"10px"}>Sr. NO</StyledTableCell>{" "}
                <StyledTableCell
                  minWidth={"100px"}
                  maxWidth={"100px"}
                  align="center"
                >
                  Image
                </StyledTableCell>
                <StyledTableCell align="center">Image Title</StyledTableCell>
                <StyledTableCell align="center">
                  Image Description
                </StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {galleryImages?.map((row, index) => (
                <>
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      width="150px"
                      height="150px"
                      padding="0.5rem"
                    >
                      <img
                        src={`${API_URL + row.image}`}
                        alt="Activity"
                        srcset={`${API_URL + row.image}`}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
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
                dispatch(deleteGallery(galleryId));
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
