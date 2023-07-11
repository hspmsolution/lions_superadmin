import React, { useState, useRef, useEffect } from "react";
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
} from "@mui/material";
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
import { addSlider } from "../../actions/assets";

var sliderDetail = {
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

function createData(sNO, imgURL, imgTitle, imgDec) {
  return { sNO, imgURL, imgTitle, imgDec };
}

const rows = [
  createData(1, "Img", "Img Title", "Img Des"),
  createData(2, "Img", "Img Title", "Img Des"),
  createData(3, "Img", "Img Title", "Img Des"),
  createData(4, "Img", "Img Title", "Img Des"),
  createData(5, "Img", "Img Title", "Img Des"),
];

export default function Slider() {
  const fileUploadRef = useRef();
  const [slider, setSlider] = useState(sliderDetail);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlider((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", slider.title);
    formData.append("description", slider.description);
    formData.append("image", slider.image.data);
    dispatch(addSlider(formData));
    setSlider({ title: "", description: "", image: slider.image });
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
    setSlider({ ...slider, image: img });
  };

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
            margin: "auto",
            padding: "77px 99px 87px",
            color: "#fff",
          }}>
          <Typography
            variant="h3"
            color={"#1d3d7c"}
            textAlign={"center"}
            marginBottom={"1rem"}>
            Slider
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
            {slider.image.preview && (
              <img
                src={slider.image.preview}
                width="100"
                height="100"
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
              }}>
              Image Title
            </Typography>
            <TextField
              required
              id="title"
              name="title"
              type="text"
              value={slider.title}
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
              }}>
              Image Description
            </Typography>
            <TextField
              required
              id="description"
              name="description"
              type="text"
              value={slider.description}
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
            }}>
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
              }}>
              Save
            </Button>
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
              }}>
              Delete
            </Button>
          </Box>
        </Box>
      </form>

      {/* Table */}
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
              {rows.map((row) => (
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
                    {row.imgURL}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.imgTitle}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.imgDec}</StyledTableCell>
                  <StyledTableCell align="center">
                    <DeleteIcon sx={{ cursor: "pointer" }} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
