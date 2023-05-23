import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { getClubs } from "../../actions/clubs";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import StarIcon from "@mui/icons-material/Star";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddClubDialog from "./AddClubDialog";

const columns = [
  { id: "id", label: "SrNo.", minWidth: 60 },
  { id: "clubId", label: "ClubId", minWidth: 100 },
  { id: "clubName", label: "ClubName", minWidth: 100 },
  { id: "adminStars", label: "AdminStars", minWidth: 100 },
  { id: "lastUpdate", label: "LastUpdate", minWidth: 100 },
  { label: "Delete", minWidth: 100 },
  { label: "View", minWidth: 100 },
];

function createData(id, clubId, clubName, adminstars, lastupdated) {
  return { id, clubId, clubName, adminstars, lastupdated };
}

export default function AllClubs() {
  const [page, setPage] = React.useState(0);
  const Clubs = useSelector((state) => state.clubs.registeredClubs);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(Clubs);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(getClubs());
  }, []);

  // Club Dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // //  Tab
  // function TabPanel(props) {
  //   const { children, value, index, ...other } = props;

  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box sx={{ p: 3 }}>
  //           <Typography>{children}</Typography>
  //         </Box>
  //       )}
  //     </div>
  //   );
  // }

  // TabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.number.isRequired,
  //   value: PropTypes.number.isRequired,
  // };

  // function a11yProps(index) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     "aria-controls": `simple-tabpanel-${index}`,
  //   };
  // }

  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // // Table
  // function createData01(name, stars) {
  //   return { name, stars };
  // }

  // const rows01 = [
  //   createData01("Reports:", 0),
  //   createData01("Activities:", 0),
  //   createData01("Total Amount Spent", 0),
  // ];

  // function createData02(name, value) {
  //   return {
  //     name,
  //     value,
  //   };
  // }

  // const rows02 = [
  //   createData02("Club Name:", 0),
  //   createData02("Club Id:", 0),
  //   createData02("Last Update", 0),
  //   createData02("Report Submitted", 0),
  //   createData02("Activity Reported", 0),
  //   createData02("News Reported", 0),
  //   createData02("Event Reported", 0),
  //   createData02("Total Member", 0),
  // ];

  // // Select

  // const monthYear = [
  //   { id: 1 - 2020, value: "Jan 2020" },
  //   { id: 1 - 2020, value: "Feb 2020" },
  //   { id: 1 - 2020, value: "Mar 2020" },
  //   { id: 1 - 2020, value: "Apr 2020" },
  //   { id: 1 - 2020, value: "May 2020" },
  //   { id: 1 - 2020, value: "Jun 2020" },
  //   { id: 1 - 2020, value: "Jul 2020" },
  //   { id: 1 - 2020, value: "Aug 2020" },
  //   { id: 1 - 2020, value: "Sep 2020" },
  //   { id: 1 - 2020, value: "Oct 2020" },
  //   { id: 1 - 2020, value: "Nov 2020" },
  //   { id: 1 - 2020, value: "Dec 2020" },
  // ];

  // const [selectValue, setSelectValue] = React.useState("");

  // const handleChangeSelect = (event) => {
  //   setSelectValue(event.target.value);
  // };
  return (
    <>
      <Paper
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
          All Clubs
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          spacing={3}
          style={{ marginTop: "16px" }}
        >
          <Grid
            item
            xs={6}
            style={{ textAlign: "left", marginLeft: "1em" }}
          >
            <TextField
              id="search"
              label="Search Club"
              variant="outlined"
              size="small"
              onChange={handleSearchInputChange}
            />
          </Grid>
        </Grid>
        <TableContainer sx={{ maxHeight: 440, marginTop: "1em" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
          >
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
              {Clubs?.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row, index) => {
                return (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.clubId}</TableCell>
                    <TableCell>{row.clubName}</TableCell>
                    <TableCell>{row.adminstars}</TableCell>
                    <TableCell>{row.lastupdated?.slice(0, 10)}</TableCell>

                    <TableCell>
                      <Button variant="outlined">Delete</Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        sx={{ color: "red" }}
                        variant="outlined"
                        onClick={handleClickOpen}
                      >
                        View
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
          count={Clubs?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <AddClubDialog
        open={open}
        close={handleClose}
      />

      {/* Dialog */}
      {/* <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"none"}
      >
        <DialogTitle
          id="responsive-dialog-title"
          align="center"
        >
          Heading
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: "1000px",
                height: "500px",
              }}
            >
              <Grid
                container
                spacing={2}
                paddingBottom={"1rem"}
              >
                <Grid
                  item
                  lg={4}
                  xs={12}
                  spacing={2}
                >
                  <Grid item>
                    <Paper
                      elevation={3}
                      sx={{ padding: "0.5rem", mb: "1rem" }}
                    >
                      <Typography
                        variant="3"
                        align={"center"}
                        display={"block"}
                      >
                        Name
                      </Typography>

                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            {rows01.map((row, index) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                >
                                  {row.name}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "end",
                                  }}
                                >
                                  {row.stars}
                                  {index === rows01.length - 1 ? (
                                    ""
                                  ) : (
                                    <StarIcon sx={{ color: "orange" }} />
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper
                      elevation={3}
                      sx={{ padding: "0.5rem" }}
                    >
                      <Typography
                        variant="3"
                        align={"center"}
                        display={"block"}
                      >
                        Info
                      </Typography>

                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            {rows02.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                >
                                  {row.name}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{ display: "flex", flexDirection: "row" }}
                                >
                                  {row.value}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={8}
                  xs={12}
                >
                  <Paper
                    elevation={3}
                    sx={{ padding: "0.5rem", height: "100%" }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons={false}
                          aria-label="basic tabs example"
                        >
                          <Tab
                            label="Activity Reporting"
                            {...a11yProps(0)}
                          />
                          <Tab
                            label=" Admin Reporting"
                            {...a11yProps(1)}
                          />
                          <Tab
                            label="Event Reporting"
                            {...a11yProps(2)}
                          />
                          <Tab
                            label="News Reporting"
                            {...a11yProps(3)}
                          />
                        </Tabs>
                      </Box>
                      <TabPanel
                        value={value}
                        index={0}
                      >
                        Activity Reporting
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={1}
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Search by month and Year
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectValue}
                            label="Search by month and Year"
                            onChange={handleChangeSelect}
                          >
                            {monthYear.map((item) => (
                              <MenuItem value={item.id}>{item.value}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={2}
                      >
                        Event Reporting
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={3}
                      >
                        News Reporting
                      </TabPanel>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}
