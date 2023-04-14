import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const ProfileForm = () => {
  return (
    <>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "1em",width:'30%' }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              First Name
            </Typography>
            <TextField
              required
              type="text"
              id="fname"
              name="fname"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Box>{" "}
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "1em",width:'30%' }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Middle Name
            </Typography>
            <TextField
              type="text"
              id="middleName"
              name="middleName"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Box>{" "}
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "1em" ,width:'30%'}}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Last Name
            </Typography>
            <TextField
              required
              type="text"
              id="lName"
              name="lName"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",width:'30%'
             
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Email ID
            </Typography>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",width:'30%'
             
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Contact No
            </Typography>
            <TextField
              required
              type="tel"
              id="contact"
              name="contact"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",width:'30%'
             
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Select DOB
            </Typography>
            <TextField
              required
              type="date"
              id="dob"
              name="dob"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Box>         
          </Box>

          <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
           
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",width:'30%'
             
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Enter Spouse Name
            </Typography>
            <TextField
              required
              type="text"
              id="spouse"
              name="spouse"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",width:'30%'
             
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Select Gender
            </Typography>
            <TextField
              required
              select
              id="Gender"
              name="gender"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",width:'30%'
             
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              Select Occupation
            </Typography>
            <TextField
              required
              select
              id="occupation"
              name="occupation"
              fullWidth
              variant="outlined"
            />
          </Box>         
          </Box>
       
      </form>
    </>
  );
};

export default ProfileForm;
