import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signIn } from '../../actions/auth';
import { ADMIN } from '../../constants/actionTypes';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const isAdmin = useSelector((state) => state.auth.admin);
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      memberId: '',
      password: '',
    },
    validationSchema: Yup.object({
      memberId: Yup.number().integer('Must be an integer').required('Member Id is required'),
      password: Yup.string().max(255).required('Password is required'),
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
   if(isAdmin)navigate('/dashboard/app')
  }, []);

  useEffect(() => {
    if (message) setDisabled(false);
  }, [message]);

  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Link to="/">
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Home
            </Button>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                login with Member Id
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
              variant="outlined"
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
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button color="primary" disabled={disabled} fullWidth size="large" type="submit" variant="contained">
                Login In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
