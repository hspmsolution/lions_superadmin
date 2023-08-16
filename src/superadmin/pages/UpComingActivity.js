import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { downloadUpcomingActivity, getUpcomingActivity } from "../../actions/activity";
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
import Slider from "react-slick";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { API_URL } from "../../api";

const useStyles = makeStyles(() => ({
  activityContainer: {
    margin: "3rem auto",
  },
  eventCard: {
    padding: 0,
    textAlign: "center",
  },
  slider: {
    height: "350px",
    width: "350px",
  },
  newsPagination: {
    "& ul": {
      gap: "10px",
    },
  },

  "@media only screen and (min-width: 900px)": {
    dialog: {
      width: "600px",
    },
    dialogPaper: {
      height: "fit-content",
    },
  },
  "@media only screen and (max-width: 900px)": {
    dialog: {
      maxWidth: "500px ",
    },
    dialogPaper: {
      height: "fit-content",
    },
  },
}));

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

function ResponsiveDialog({
  activityType,
  title,
  date,
  bgImage,
  bgImage2,
  description,
  activityId,
  category,
  place,
  clubId,
  clubName,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Button
        sx={{ color: "red" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Open Activity Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"none"}
        sx={{ margin: "auto" }}
        className={classes.dialog}
      >
        <DialogContent>
          <Paper
            variant="outlined"
            sx={{
              padding: "0.5rem",
              margin: "auto",
              width: "100%",
            }}
            className={classes.dialogPaper}
          >
            {/* <img
              src={API_URL + bgImage}
              alt="helping"
              style={{ width: "900px", height: "100%" }}
            /> */}
            <div className="slider02">
              <Slider
                autoplay={true}
                infinite={true}
                dots={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
              >
                <div>
                  <img
                    src={API_URL + bgImage}
                    alt="slider"
                    style={{ width: "900px", height: "100%" }}
                  />
                </div>
                {bgImage2 && (
                  <div>
                    <img
                      src={API_URL + bgImage2}
                      alt="slider"
                      style={{ width: "900px", height: "100%" }}
                    />
                  </div>
                )}
              </Slider>
            </div>
          </Paper>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Club Name:</strong>
                  </TableCell>
                  <TableCell>{clubName}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity ID:</strong>
                  </TableCell>
                  <TableCell>{activityId}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Title:</strong>
                  </TableCell>
                  <TableCell>{title}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Date:</strong>
                  </TableCell>
                  <TableCell>{date?.slice(0, 10)}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Type:</strong>
                  </TableCell>
                  <TableCell>{activityType}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Category:</strong>
                  </TableCell>
                  <TableCell>{category}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong>Activity Place:</strong>
                  </TableCell>
                  <TableCell>{place}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <strong> Activity Description:</strong>
                  </TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function UpComingActivity() {
  const Activities = useSelector((state) => state.activity.upcomingActivity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcomingActivity());
  }, []);
  return (
    <Box bgcolor="white" p={3} borderRadius={4} marginTop={2}>
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
        UpComing Activities
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="news table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Activity Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
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
                <StyledTableCell>{row.place}</StyledTableCell>
                <StyledTableCell>{row.date.slice(0, 10)}</StyledTableCell>
                <StyledTableCell>
                  <ResponsiveDialog
                    activityType={row.activityType}
                    title={row.activityTitle}
                    date={row.date.slice(0, 10)}
                    bgImage={row.image_path}
                    bgImage2={row.image_path2}
                    description={row.description}
                    activityId={row.activityId}
                    category={row.activityCategory}
                    place={row.place}
                    clubId={row.clubId}
                    clubName={row.clubName}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Button variant="outlined" onClick={()=>{dispatch(downloadUpcomingActivity([row]))}}>Download</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
