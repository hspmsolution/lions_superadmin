import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button, Grid, TextField, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { id: "id", label: "SrNo.", minWidth: 60 },
  { id: "type", label: "Title", minWidth: 100 },
  { id: "subtype", label: "Count", minWidth: 100 },
];

export default function StatsTable(props) {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.activity.stats);
  const minPage = Math.min(
    stats?.activityTypeCount?.length || Infinity,
    stats?.activitySubTypeCount?.length || Infinity,
    stats?.activityCategoryCount?.length || Infinity
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Define a filtering function
  const filterActivities = (activities) => {
    if (searchTerm.trim() === "") {
      return activities;
    } else {
      return activities.filter((activity) =>
        activity.activityType?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const Activity = filterActivities(props.data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setRowsPerPage(minPage);
  }, [minPage]);

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "1em",
        marginTop: "2em",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          width: "25%",
          borderBottom: "2px solid #B4880B",
          color: "#003895",
          alignItems: "center",
          margin: "1em",
        }}
      >
        {props?.type}
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        spacing={3}
        style={{ marginTop: "16px" }}
      >
        <Grid item xs={6} style={{ textAlign: "left", marginLeft: "1em" }}>
          <TextField
            id="search"
            label="Search Activty"
            variant="outlined"
            size="small"
            onChange={handleSearchInputChange}
          />
        </Grid>
      </Grid>
      <TableContainer sx={{ marginTop: "1em" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Activity?.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row, index) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{row.activityType}</TableCell>
                    <TableCell>{row.typeCount}</TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Activity?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
