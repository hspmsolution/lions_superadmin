import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddClubDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  //  Tab
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Table
  function createData01(name, stars) {
    return { name, stars };
  }

  const rows01 = [
    createData01("Reports:", 0),
    createData01("Activities:", 0),
    createData01("Total Amount Spent", 0),
  ];

  function createData02(name, value) {
    return {
      name,
      value,
    };
  }

  const rows02 = [
    createData02("Club Name:", 0),
    createData02("Club Id:", 0),
    createData02("Last Update", 0),
    createData02("Report Submitted", 0),
    createData02("Activity Reported", 0),
    createData02("News Reported", 0),
    createData02("Event Reported", 0),
    createData02("Total Member", 0),
  ];

  // Select

  const monthYear = [
    { id: 1 - 2023, value: "July 2023" },
    { id: 1 - 2023, value: "August 2023" },
    { id: 1 - 2023, value: "September 2023" },
    { id: 1 - 2023, value: "October 2023" },
    { id: 1 - 2023, value: "November 2023" },
    { id: 1 - 2020, value: "December 2023" },
    { id: 1 - 2020, value: "January 2024" },
    { id: 1 - 2020, value: "February 2024" },
    { id: 1 - 2020, value: "March 2024" },
    { id: 1 - 2020, value: "April 2024" },
    { id: 1 - 2020, value: "May 2024" },
    { id: 1 - 2020, value: "June 2024" },
  ];

  const [selectValue, setSelectValue] = React.useState("");

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.close}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"none"}>
        <DialogTitle
          id="responsive-dialog-title"
          align="center">
          Heading
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: "1000px",
                height: "500px",
              }}>
              <Grid
                container
                spacing={2}
                padding={"1rem"}>
                <Grid
                  item
                  lg={4}
                  xs={12}
                  spacing={2}>
                  <Grid item>
                    <Paper
                      elevation={3}
                      sx={{ padding: "0.5rem", mb: "1rem" }}>
                      <Typography
                        variant="3"
                        align={"center"}
                        display={"block"}>
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
                                }}>
                                <TableCell
                                  component="th"
                                  scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "end",
                                  }}>
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
                      sx={{ padding: "0.5rem" }}>
                      <Typography
                        variant="3"
                        align={"center"}
                        display={"block"}>
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
                                }}>
                                <TableCell
                                  component="th"
                                  scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}>
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
                  xs={12}>
                  <Paper
                    elevation={3}
                    sx={{ padding: "0.5rem", height: "100%" }}>
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons={false}
                          aria-label="basic tabs example">
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
                        index={0}>
                        Activity Reporting
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={1}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Search by month and Year
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectValue}
                            label="Search by month and Year"
                            onChange={handleChangeSelect}>
                            {monthYear.map((item) => (
                              <MenuItem value={item.id}>{item.value}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={2}>
                        Event Reporting
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={3}>
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
            onClick={props.close}
            autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddClubDialog;
