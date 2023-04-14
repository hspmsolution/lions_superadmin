import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, TextField ,Paper,Box} from '@mui/material';
import { useDropzone } from 'react-dropzone';

export default function Gallery() {
    const [image, setImage] = useState(null);
    const [title,setTitle]=useState('');
    const [description, setDescription] = useState('');
  
    const handleDrop = (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      accept: 'image/*',
      multiple: false,
    });
  
    return (
      <Paper elevation={3} sx={{ minWidth: 345,margin:"auto",borderRadius:'10px'}}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <CardMedia
            component="img"
            sx={{height:'300px',width:'14em',margin:'auto'}}
            image={image || '/assets/img/image.jpg'}
            alt="upload image"
          />
        </div>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
            Image Title
          </Typography>
          <TextField
          fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter Title here..."
          />
        </CardContent>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
            Image Description
          </Typography>
          <TextField
          fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter description here..."
          />
        </CardContent>
      </Paper>
    
    );
  }
