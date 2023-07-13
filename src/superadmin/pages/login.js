import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { signIn } from "../../actions/auth";
import { ADMIN } from "../../constants/actionTypes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  label: {
    " & label.MuiInputLabel-root, & input.MuiInputBase-input": {
      color: "#39459b",
    },
    "& label.Mui-focused": {
      color: "#39459b",
    },
  },
  button: {
    "&.MuiButton-root": {
      backgroundColor: "primary",
      border: "1px solid white",
      "&:hover, &:active": {
        color: "white",
        border: "1px solid white",
      },
      "&:active": {
        backgroundColor: "#0d99d7",
        color: "#39459b",
      },
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const isAdmin = useSelector((state) => state.auth.admin);
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      memberId: "",
      password: "",
    },
    validationSchema: Yup.object({
      memberId: Yup.number()
        .integer("Must be an integer")
        .required("Member Id is required"),
      password: Yup.string()
        .max(255)
        .required("Password must be of alphanumeric Hspm@123 min. 8"),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        dispatch(signIn(data, navigate));
      }, 500);

      setDisabled(true);
    },
  });

  useEffect(() => {
    dispatch({ type: ADMIN });
    if (isAdmin) navigate("/superadmin/dashboard/app");
  }, []);

  useEffect(() => {
    if (message) setDisabled(false);
  }, [message]);

  return (
    <Box
      sx={{
        // backgroundImage: 'url("/assets/img/activity.png")',
        backgroundImage:
          'url("https://lionsdistrict317f.org/api/static/assets/1689239494654-loginpage.png")',
        backgroundSize: "cover",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        color: "#39459b",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.1)",
      }}>
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Box
        //component="main"
        sx={{
          background: " rgba( 255, 255, 255, 0.45 )",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 5.5px )",
          backdropFilter: "blur( 5.5px )",
          borderRadius: "20px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          maxWidth: "758px",
          margin: "auto",
          padding: "77px 99px 87px",
          color: "#fff",
        }}>
        <Container maxWidth="sm">
          <Link to="/">
            <Button
              component="a"
              sx={{ color: "white" }}
              startIcon={<ArrowBackIcon fontSize="small" />}>
              Home
            </Button>
          </Link>
          <form
            onSubmit={formik.handleSubmit}
            className={classes.label}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
                color: "white",
              }}>
              <Typography
                align="center"
                color="white"
                variant="h6">
                Login with Member Id
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.memberId && formik.errors.memberId)}
              fullWidth
              helperText={formik.touched.memberId && formik.errors.memberId}
              label="Member Id"
              margin="normal"
              name="memberId"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.email}
              variant="standard"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="standard"
            />
            <Box sx={{ py: 2 }}>
              <Button
                className={classes.button}
                disabled={disabled}
                fullWidth
                size="large"
                type="submit"
                variant="contained">
                Login In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
