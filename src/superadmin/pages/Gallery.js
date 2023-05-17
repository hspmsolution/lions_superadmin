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
import {CLIENT_MSG} from '../../constants/actionTypes';
import {useDispatch} from "react-redux";
import {addGallery} from "../../actions/assets";

const galleryDetail={
  title:"",
  description:"",
  image:{preview:"",data:""},
}
export default function Gallery() {
  const fileUploadRef=useRef();
  const[gallery,setGallery]=useState(galleryDetail);
  const dispatch=useDispatch();

  // useEffect(()=>{

  // })
  const handleChange = (e) => {
    const { id, value } = e.target;
    setGallery((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData=new FormData();
    formData.append("title",gallery.title);
    formData.append("description",gallery.description);
    formData.append("image",gallery.image.data);
    dispatch(addGallery(formData));
    setGallery(galleryDetail);
    console.log(formData);
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
    if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg") {
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

  return (
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
        }}
      >
        <Box {...getRootProps()} sx={{ marginBottom: "2em" }}>
          <input {...getInputProps()} />
          <Box
            sx={{
              // border: "2px dashed #C4CDD5",
              // borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              width: "100%",
              marginBottom: "1em",
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {!image && (
              <>
                <Icon
                  sx={{
                    color: "black",
                    width: "100%",
                    height: "5em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CloudUpload sx={{ width: "3em", height: "3em" }} />
                </Icon>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Upload Image here
                </Typography>
              </>
            )}
          </Box>
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
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter Title here..."
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
            fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter description here..."
          />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around',flexDirection:'row'}}> <Button
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
          Delete
        </Button></Box>
      </Box>
    </form>
  );
}
