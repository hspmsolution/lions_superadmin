import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import MenuItem from "@mui/material/MenuItem";
import ClubActivities from "./ClubActivities";
import ClubNews from "./ClubNews";
import { clubAdminReport, getClubNews } from "../../actions/clubs";
import ClubReports from "./ClubReports";

function AddClubDialog(props) {
  const {clubId}=props;
  const [selectedMonth,setSelectedMonth] = useState();
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const clubInfo = useSelector((state) => state.clubs?.clubInfo);


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
 
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
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
    createData01("Total Admin Points", clubInfo?.adminPoint),
    createData01("Activities Count:", clubInfo?.activityCount),
    createData01("Total Amount Spent", clubInfo?.totalExpense),
  ];

  function createData02(name, value) {
    return {
      name,
      value,
    };
  }

  const rows02 = [
    createData02("Club Name:", clubInfo?.clubName),
    createData02("Club Id:", clubInfo?.clubId),
    createData02("Last Update", clubInfo?.lastupdated?.slice(0, 10)),
    createData02("News Reported", clubInfo?.totalNews),
    createData02("Total Member", clubInfo?.totalMembers),
  ];

  // Select

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const available_months = [
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
  ];

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.close}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"none"}
      >
        <DialogTitle id="responsive-dialog-title" align="center">
          {clubInfo?.clubName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: "1200px",
                width: "100%",
                height: "500px",
              }}
            >
              <Grid container spacing={2} padding={"1rem 0"}>
                <Grid item lg={4} xs={12} spacing={2}>
                  <Grid item>
                    <Paper elevation={3} sx={{ padding: "0.5rem", mb: "1rem" }}>
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
                            {rows01?.map((row, index) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
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
                                  {index === 0 ? (
                                    <StarIcon sx={{ color: "orange" }} />
                                  ) : (
                                    ""
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
                    <Paper elevation={3} sx={{ padding: "0.5rem" }}>
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
                            {rows02?.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
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
                <Grid item lg={8} xs={12}>
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
                          <Tab label="Activity Reporting" {...a11yProps(0)} />
                          <Tab label=" Admin Reporting" {...a11yProps(1)} />
                          <Tab label="News Reporting" {...a11yProps(2)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}>
                        <ClubActivities />
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <TextField
                          id="Month"
                          select
                          value={selectedMonth} 
                          fullWidth
                          label="Select Month "
                          onChange={(e) => {
                            setSelectedMonth(e.target.value);
                            const selectedIndexes = monthNames
                              .map((month, index) =>
                                month === e.target.value ? index + 1 : -1
                              )
                              .filter((index) => index !== -1);
                            dispatch(clubAdminReport(clubId,selectedIndexes[0]));
                          }}
                        >
                          {available_months.map((item, index) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </TextField>
                        <ClubReports/>
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <ClubNews />
                      </TabPanel>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddClubDialog;
