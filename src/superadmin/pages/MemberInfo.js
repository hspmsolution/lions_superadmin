import React, { useEffect, useState } from "react";
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
import { getMembers} from "../../actions/members";
const columns = [
  { id: "index", label: "SrNo.", minWidth: 60 },
  { id: "id", label: "MemberID.", minWidth: 60 },
  { id: "clubName", label: "ClubName", minWidth: 100 },
  { id: "clubId", label: "ClubId", minWidth: 100 },
  { id: "title", label: "Designation", minWidth: 100 },
  { id: "fullName", label: "Name", minWidth: 100 },
  { id: "address",label:"Address" ,minWidth: 100 },
  { id: "city",label:"City", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "spouseName", label: "Spouse Name", minWidth: 100 },
  { id: "dob", label: "DOB", minWidth: 100 },
  { id: "gender", label: "Gender", minWidth: 100 },
  { id: "occupation", label: "Occupation", minWidth: 100 },
  {  label: "Edit", minWidth: 100 },
  {  label: "Delete", minWidth: 100 },
  


];

function createData(id, clubName, clubId, title,fullName, address,city,email,phone,spouseName,dob,gender,occupation,Edit,Delete) {
  return {id, clubName, clubId, title,fullName, address,city,email,phone,spouseName,dob,gender,occupation,Edit,Delete};
}


export default function MemberInfo() {
  const [page, setPage] = React.useState(0);
  const Members = useSelector((state) => state.members.memberData);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(Members);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(getMembers());
  }, []);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden",borderRadius:'1em' ,marginTop:'2em'}}>
        <Typography variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
           Member Details
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
            label="Search"
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
            {Members?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell >{row.id}</TableCell>
                    <TableCell>{row.clubName}</TableCell>
                    <TableCell>{row.clubId}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell >{row.address}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.spouseName}</TableCell>
                    <TableCell >{row.dob?.slice(0, 10)}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.occupation}</TableCell>
                    <TableCell>
                      <Button variant="outlined">
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined">Delete</Button>
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
        count={Members?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
