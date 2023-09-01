import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../../api";
import { Button, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


// Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1d3d7c",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ClubReports = () => {
  const clubAdminReport = useSelector((state) => state.clubs.clubAdminReport);
 
  return (
    <>
      {!clubAdminReport.pdfPath && <div>No data found</div>}
      {clubAdminReport.pdfPath && (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ marginTop: "2rem" }}>
                 Admin Points {clubAdminReport?.adminstars}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ marginTop: "2rem" }}>
                Total Activity Points {clubAdminReport?.activityStar}
              </Typography>
            </Grid>
          </Grid>

          <a
            href={API_URL + clubAdminReport.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            View uploaded Report
          </a>
          <Grid item xs={12} md={16}>
            <Box sx={{ marginTop: "2rem" }}>
              <TableContainer component={Paper} elevation={11}>
                <Table fullWidth aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                        minWidth={"100px"}
                        maxWidth={"100px"}
                        align="center"
                      >
                        Sr.no
                      </StyledTableCell>
                      <StyledTableCell align="center">Title</StyledTableCell>
                      <StyledTableCell align="center">
                        Admin Points
                      </StyledTableCell>
                      <StyledTableCell align="center">Count</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clubAdminReport?.reports.map((row, index) => (
                      <>
                        <StyledTableRow key={index + 1}>
                          <StyledTableCell component="th" scope="row">
                            {row.titleId}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.title}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.adminstars}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.count}
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </div>
      )}
    </>
  );
};

export default ClubReports;
