import * as React from 'react';
import { Helmet } from "react-helmet-async";
import { useTheme } from '@mui/material/styles';
import {Box,Icon,Card,CardContent,CardMedia,IconButton,Typography} from '@mui/material';
import {LocalActivity} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import UpComingEvent from './UpComingActivity';
import UpComingActivity from './UpComingActivity';
const useStyles=makeStyles({
  CardContainer:{
    display: 'flex' ,
    marginTop:'20px',
    width:'300px',
    height:'7em',
  },
  Icon:{
    width: 151, height: "3em", paddingTop: "1em" 
  }
});
export default function DashboardAppPage() {
  const classes=useStyles();
  const theme = useTheme();

  return (
<><Helmet>
        <title> Dashboard </title>
      </Helmet>
      <Typography  variant="h6" gutterBottom sx={{ width: "25%",
    borderBottom: "2px solid #B4880B",
    color: "#003895",alignItems:'center',margin:'1em'}}>
        Dashboard
      </Typography>
      
      <Box sx={{display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',}}>
    <Card className={classes.CardContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Total Activity
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           12
          </Typography>
        </CardContent>
      </Box>
      <Icon className={classes.Icon}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#2F4C83" }}
            />
        </Icon>
    </Card>
    <Card className={classes.CardContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Total Clubs
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          23
          </Typography>
        </CardContent>
      </Box>
      <Icon className={classes.Icon}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#2F4C83" }}
            />
        </Icon>
    </Card>
    <Card className={classes.CardContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Amount Spent
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            56000
          </Typography>
        </CardContent>
      </Box>
      <Icon className={classes.Icon}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#2F4C83" }}
            />
        </Icon>
    </Card>
    </Box>
      <Box sx={{display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',}}>
      <Card className={classes.CardContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Beneficiary Survey
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            34
          </Typography>
        </CardContent>
      </Box>
      <Icon className={classes.Icon}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#2F4C83" }}
            />
        </Icon>
    </Card>
    <Card className={classes.CardContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Lion Hrs
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
        2390
          </Typography>
        </CardContent>
      </Box>
      <Icon className={classes.Icon}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#2F4C83" }}
            />
        </Icon>
    </Card>
    <Card className={classes.CardContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          All Members
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            5678
          </Typography>
        </CardContent>
      </Box>
      <Icon className={classes.Icon}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#2F4C83" }}
            />
        </Icon>
    </Card>
      </Box>
    <UpComingActivity/>
      </>
    
  );
}

