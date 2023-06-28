import React, { useEffect } from "react";
import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {getUpcomingActivity} from '../../actions/activity';
import { useDispatch, useSelector } from "react-redux";
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function UpComingActivity(){
  const Activities = useSelector((state) => state.activity.upcomingActivity);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getUpcomingActivity());
  }, []);
  return (
    <Box bgcolor="white" p={3} borderRadius={4} marginTop={2}>
      <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
       UpComing Activities
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="news table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Activity Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Chif Guest</StyledTableCell>
              <StyledTableCell>Venue</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>View</StyledTableCell>
              <StyledTableCell>Download</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Activities?.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.activityTitle}</StyledTableCell>
                <StyledTableCell>{row.description}</StyledTableCell>
                <StyledTableCell>{row.chiefGuest}</StyledTableCell>
                <StyledTableCell>{row.place}</StyledTableCell>
                <StyledTableCell>{row.date.slice(0,10)}</StyledTableCell>
                <StyledTableCell>
                 <Button sx={{color:"red"}} variant="outlined">View</Button>
                </StyledTableCell>
                <StyledTableCell>
                 <Button variant="outlined">Download</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

