import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import useStyles from './Styles';
import PopupMenu from './PopupMenu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Events', 'Activities', 'Membership', 'Resources', 'Login', 'My LCI'];

const myNav = [
  { title: "Home" },
  {
    title: "About",
    menuItems: [ 'Governor', 'DG Team', 'About District 317F', 'Organization Chart' ]
  },
  { title: "Activities" },
  {
    title: "Membership",
    menuItems: [ 'Member Directory', 'Business Directory', 'Download Member Data' ]
  },
  {
    title: "Resources",
    menuItems: [ 'News', 'Gallery', 'Global Priorities', 'Download Resources' ]
  },
  { title: "Login" },
  { title: "My LCI" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Avatar
        alt="Remy Sharp"
        src={"/assets/user/logo.png"}
        sx={{ width: 56, height: 56 }}
      />
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" className={classes.mainNav} >
        <Toolbar>
          <IconButton
            color='#7c7c7c'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, gap: '1rem' }}
          >
            <Link to={'/'}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/img/logo.png"
                sx={{ width: 80, height: 80 }}
              />
            </Link>
            <Link to={'/'}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/img/logo2.png"
                sx={{ width: 80, height: 80 }}
                className={classes.clubLogo}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {myNav.map((item,index) => (
              <Button key={index} sx={{ color: '#fff' }}>
                {/* {item} */}
                <PopupMenu title={item.title} menuItems={item.menuItems} />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;