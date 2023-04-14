import React, { useState, useEffect, useSyncExternalStore } from "react";
import ReactQuill from "react-quill";
import { makeStyles } from "@mui/styles";
import { Box, Button, Paper, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css";

const useStyles=makeStyles({
  editor:{
    height:'400px',
    border: "none", 
    // '& .ql-container': {
    //   border: 'none'
    // },
    '& .ql-editor':{
      fontSize:'1.25em',
      padding:'10px'
    }
  }
})
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blackquote"],
    [{ color: [] }, { background: [] }],
    [
      { align: [] },
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ script: "sub" }, { script: "super" }],
    ["clean", "link", "image", "video"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const UpdatePrivacy = () => {
  const classes=useStyles();
  const [value, setValue] = useState("");

  useEffect(() => {
    const databaseValue = "Value retrieved from database";
    setValue(databaseValue);
  }, []);

  const [previewValue, setPreviewValue] = useState("");

  const setStoredValue = (value) => {
    localStorage.setItem("editorValue", JSON.stringify(value));
    setPreviewValue(value);
  };

  const handleUpdatePreview = () => {
    setPreviewValue(value);
    setStoredValue(value);
  };

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Paper elevation={3} sx={{borderRadius:'1em',padding:'1em'}}>
      <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>Add Privacy and Policy</Typography>
        <ReactQuill
          className={classes.editor}
          theme="snow"
          value={value}
          onChange={handleEditorChange}
          modules={modules}
         
        />
         <Paper sx={{display:'flex',justifyContent:'center',marginTop:'3em'}}> <Button
        sx={{
          width: "150px",
          padding: "10px",
          fontSize: "1em",
          alignItems:'center'
        }}
        variant="contained"
        onClick={handleUpdatePreview}
      >
        Update
      </Button></Paper>
      </Paper>

    

      <Paper elevation={3} sx={{borderRadius:'1em',padding:'1em',marginTop:'2em'}}>
  <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>Privacy and Policy</Typography>
  <p dangerouslySetInnerHTML={{ __html: value }} />
</Paper>
    </Box>
  );
};

export default UpdatePrivacy;
