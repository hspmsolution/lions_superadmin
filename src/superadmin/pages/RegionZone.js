import React from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
function RegionZone() {
  return (
    <>
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
          padding: "77px 2rem",
          color: "#fff",
        }}>
        <Typography
          variant="h3"
          color={"#1d3d7c"}
          textAlign={"center"}
          marginBottom={"1rem"}>
          Region:
        </Typography>
        <Box
          bgcolor="white"
          //   p={3}
        >
          <TableContainer component={Paper}>
            <Table aria-label="news table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club Id</TableCell>
                  <TableCell>July 2023</TableCell>
                  <TableCell>August 2023</TableCell>
                  <TableCell>September 2023</TableCell>
                  <TableCell>October 2023</TableCell>
                  <TableCell>November 2023</TableCell>
                  <TableCell>December 2023</TableCell>
                  <TableCell>January 2024</TableCell>
                  <TableCell>February 2024</TableCell>
                  <TableCell>March 2024</TableCell>
                  <TableCell>April 2024</TableCell>
                  <TableCell>May 2024</TableCell>
                  <TableCell>June 2024</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* <TableRow key={row.id}>
                    <TableCell
                      component="th"
                      scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{row.clubName}</TableCell>
                    <TableCell>{row.clubId}</TableCell>
                    <TableCell>
                      {row?.latestActivity &&
                        new Date(row?.latestActivity).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {row?.currentAdminReport === 1 ? "yes" : "no"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={handleClickOpen}>
                        View Activity
                      </Button>
                    </TableCell>
                  </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Dialog */}
        </Box>
      </Box>
    </>
  );
}

export default RegionZone;
