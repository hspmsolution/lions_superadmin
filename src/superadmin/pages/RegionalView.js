import React, { useEffect } from "react";
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
import { makeStyles } from "@mui/styles";
import { getRegion } from "../../actions/clubs";

const useStyles = makeStyles({
  title: {
    alignItems: "center",
    color: "#003895",
  },
});

export default function RegionalView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const regionData = useSelector((state) => state.clubs.region);
  const clubsByZone = regionData.reduce((acc, club) => {
    const { zoneName, ...rest } = club;
    if (!acc[zoneName]) {
      acc[zoneName] = [];
    }
    acc[zoneName].push(rest);
    return acc;
  }, {});

  // Create a 2D array from the object of clubs grouped by zone
  const clubsArray = Object.entries(clubsByZone);
  clubsArray.sort((a, b) => {
    const aZoneNumber = Number(a[0].slice(5));
    const bZoneNumber = Number(b[0].slice(5));
    return aZoneNumber - bZoneNumber;
  });

  useEffect(() => {
    dispatch(getRegion());
  }, []);

  return (
    <>
      <Box bgcolor="white" p={3} borderRadius={4} marginTop={10}>
        <Typography variant="h4" className={classes.title}>
          Regional View{" "}
        </Typography>
        <Typography variant="h5" className={classes.title}>
          {" "}
          {clubsArray?.[0]?.[1]?.[0].regionName}
        </Typography>
        {clubsArray?.map((zone) => (
          <Box key={zone} bgcolor="white" p={3}>
            <TableContainer component={Paper}>
              <Typography variant="h6" gutterBottom>
                {zone[0]}
              </Typography>
              <Table aria-label="news table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr No.</TableCell>
                    <TableCell>Club Name</TableCell>
                    <TableCell>Club Id</TableCell>
                    <TableCell>Last Activity Report</TableCell>
                    <TableCell>Admin Report of Current Month</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {zone[1]?.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Box>
    </>
  );
}
