import React ,{useState}from "react";

import { Box, Button, Typography, TextField,Paper } from "@mui/material";

export default function Contact() {
  const handleChange = (e) => {
    console.log(e);
  };
  const submitDetails = (e) => {
    e.preventDefault();
  };
  const [openMap,setOpenMap]=useState("");
  return (
    <Paper elevation={3}
      sx={{
        maxWidth: "100%",
        background: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        margin: "auto",
        display:'flex',
      
      }}
    >
       <Box
        sx={{
          position: "relative",
          width: "60%",
          backgroundColor: "#f0f0f0",
        }}
      >
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193651.63416103412!2d-74.119763127168!3d40.697663733732764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c0f34b1c5bdf%3A0x5e74128b0c71aeff!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1650252763246!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: 0, position: "absolute", top: 0, left: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>

        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            zIndex: 2,
          }}
        >
          {/* <Button
            variant="contained"
            onClick={() => setOpenMap(true)}
            sx={{
              width: "120px",
              color: "#FFF",
              backgroundColor: "#1D3D7C",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              fontSize: "1.12em",
            }}
          >
            View Map
          </Button> */}
        </Box>
      </Box>
      <Box>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/contact.jpg')",
          backgroundSize: "cover",
          width: "100%",
          position: "relative",
          zIndex: 1,
          padding: "64px 15px",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(54, 84, 99, 0.3)",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "black",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Contact Enquiries
        </Typography>
      </Box>

      <form>
        <Box sx={{ padding: "10px 50px" }}>
            <TextField
              required
              id="fullName"
              //value={user.fullName}
              name="fullName"
              label="Enter Full Name"
              fullWidth
              type="text"
              autoComplete="given-name"
              onChange={handleChange}
              variant="outlined"
              sx={{ padding: "10px" }}
            />
   
       
            <TextField
              required
              id="email"
              //value={user.email}
              name="email"
              type="email"
              label="Enter email"
              fullWidth
              onChange={handleChange}
              variant="outlined"
              sx={{ padding: "10px" }}
            />
   
            <TextField
              required
              id="phone"
              //value={user.phone}
              name="phone"
              type="tel"
              label="Enter phone"
              fullWidth
              onChange={handleChange}
              variant="outlined"
              sx={{ padding: "10px" }}
            />
  
        
            <TextField
              required
              id="message"
              //value={user.message}
              name="message"
              label="Enter message"
              fullWidth
              type="text"
              onChange={handleChange}
              variant="outlined"
              sx={{ padding: "10px" }}
            />
         
        <Button
          type="submit"
          variant="contained"
          sx={{ width:'120px',color: "#FFF", backgroundColor: "#1D3D7C", padding: "10px",
        display:'flex',justifyContent:'center',margin:'auto',fontSize:'1.12em' }}
        >
          Submit
        </Button>
        </Box>
      </form>
      </Box>

    </Paper>
  );
}
