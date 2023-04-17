import React, { useState } from "react";
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
import { CloudUpload } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";

export default function Gallery() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!(file instanceof Blob)) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "" || description.trim() === "" || image === null) {
      return;
    }
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <form  onSubmit={handleSubmit}>
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
        <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
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
        <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
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
        <Button
          type="submit"
          variant="contained"
          sx={{ width:'120px',color: "#FFF", backgroundColor: "#1D3D7C", padding: "10px",
        display:'flex',justifyContent:'center',margin:'1em auto',fontSize:'1.12em' }}
        >
          Save
        </Button>
      </Box>
      </form>
    );
  }
