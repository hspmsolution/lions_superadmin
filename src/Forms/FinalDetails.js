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

const FinalDetails = () => {
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
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              PinCode
            </Typography>
            <TextField required id="pincode" type="number" fullWidth name="pincode" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
              State
            </Typography>
            <TextField required id="state" type="text" fullWidth name="state" />
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
              marginTop: "1em",
              width: "40%",
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
            City
            </Typography>
            <TextField
              required
              id="city"
            type="text"
              fullWidth
              name="city"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
            Flat No, House No, Appartment
            </Typography>
            <TextField
              required
              id="address"
            type="text"
              fullWidth
              name="address"
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
              marginTop: "1em",
              width: "40%",
            }}
          >
            <Typography sx={{ color: "#003895", fontSize: "1em" }}>
            Street, Area
            </Typography>
            <TextField
              required
              id="street"
            type="text"
              fullWidth
              name="street"
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default FinalDetails;
