import React, {  useState,useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button,Grid,TextField, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../actions/activity";

const columns = [
  { id: "id", label: "SrNo.", minWidth: 60 },
  { id: "type", label: "Activity Type", minWidth: 100 },
  { id: "subtype", label: "Activity SubType", minWidth: 100 },
  { id: "category", label: "Activty Category", minWidth: 100 },
  { id: "placeholder", label: "Place Holder", minWidth: 100 },
  { label: "Edit", minWidth: 100 },
  { label: "Delete", minWidth: 100 },
];

function createData(type, subtype, category, placeholder) {
  return { type, subtype, category, placeholder };
}

const rows = [createData(1, 23,'Pune',34,'2022/11/2')];

export default function Activities() {
  const [page, setPage] = React.useState(0);
  const Activity = useSelector((state) => state.activity.allActivity);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, []);
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

  return (
    <Paper sx={{ width: "100%", overflow: "hidden",borderRadius:'1em' ,marginTop:'2em'}}>
        <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
           All Activities
          </Typography>
      <Grid
        container
        justifyContent="space-between"
        spacing={3}
        style={{ marginTop: "16px" }}
      >
        <Grid item xs={6} style={{ textAlign: "left" ,marginLeft:'1em'}}>
          <TextField
            id="search"
            label="Search Activty"
            variant="outlined"
            size="small"
            onChange={handleSearchInputChange}
          />
        </Grid>
      </Grid>
      <TableContainer sx={{ maxHeight: 440 ,marginTop:'1em'}}>
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
            {Activity?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow>
                    <TableCell >{index+1}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.subtype}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.placeholder}</TableCell>
                    <TableCell>
                      <Button variant="outlined">Edit</Button>
                    </TableCell>
                    <TableCell>
                      <Button sx={{ color: "red" }} variant="outlined">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
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
