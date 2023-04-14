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

const ClubForm = () => {
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
              Enter Region Name
            </Typography>
            <TextField required id="region" select fullWidth name="region" />
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
              Enter Zone Name
            </Typography>
            <TextField required id="zone" select fullWidth name="zone" />
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
              Enter Club Name
            </Typography>
            <TextField
              required
              id="clubname"
              select
              fullWidth
              name="clubname"
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
              Enter Member ID
            </Typography>
            <TextField
              required
              type="number"
              id="memberId"
              name="memberId"
              fullWidth
              variant="outlined"
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ClubForm;
