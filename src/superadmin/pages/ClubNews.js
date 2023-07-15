import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

import { useSelector } from "react-redux";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

const ClubNews = () => {
  const reportedNews = useSelector((state) => state.clubs.clubNews);

  return (
    <Box bgcolor="white" p={3} borderRadius={4}>
      <Typography variant="h6" gutterBottom>
        Reported News
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="news table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Sr No.</StyledTableCell>
              <StyledTableCell>News Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Paper Link</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              {/* <StyledTableCell>Action</StyledTableCell> */}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {reportedNews?.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.newsTitle}</StyledTableCell>
                <StyledTableCell>{row.description}</StyledTableCell>
                <StyledTableCell>
                  <a
                    href={row.newsPaperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    {row.newsPaperLink}
                  </a>
                </StyledTableCell>

                <StyledTableCell>{row.date?.slice(0, 10)}</StyledTableCell>
                {/* <StyledTableCell>
                  <IconButton aria-label="edit" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <Delete />
                  </IconButton>
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClubNews;
