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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
function AllAdminReport() {
  const [zone, setZone] = React.useState("");

  const handleChange = (event) => {
    setZone(event.target.value);
  };
  return (
    <>
      <Box
        elevation={3}
        sx={{
          minWidth: 345,
          margin: "auto",
          background: " rgba( 255, 255, 255, 0.7 )",
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
        <Box>
          <Box sx={{ width: "500px", marginBottom: "2rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={zone}
                label="Select Zone"
                onChange={handleChange}>
                <MenuItem value={"Zone01"}>Zone 01</MenuItem>
                <MenuItem value={"Zone02"}>Zone 02</MenuItem>
                <MenuItem value={"Zone03"}>Zone 03</MenuItem>
                <MenuItem value={"Zone04"}>Zone 04</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper}>
            <Table aria-label="news table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Club Name</TableCell>
                  <TableCell>Club Id</TableCell>
                  <TableCell>Last Activity Report</TableCell>
                  <TableCell>Admin Report of Current Month</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {" "}
                <TableBody>
                  {zone[1]?.map((row, index) => (
                    <TableRow key={row.id}>
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
                          // onClick={handleClickOpen}
                          >
                          View Activity
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default AllAdminReport;
