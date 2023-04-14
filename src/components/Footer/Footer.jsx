import { Avatar, Box, Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";
import useStyles from './Styles';
import "./Footer.css";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const quickLinks = ["Events", "Privacy Policies", "Terms & Conditions"];
const contact = ["123-456-7890", "example@gmail.com"];
const socialIcos = [
  <FontAwesomeIcon icon={faFacebookF} />,
  <FontAwesomeIcon icon={faTwitter} />,
  <FontAwesomeIcon icon={faInstagram} />,
  <FontAwesomeIcon icon={faLinkedin} />
];
// const footItems = [{
// }]

function Footer() {
  const classes = useStyles();

  return (
    <Box sx={{ bottom: 0, backgroundColor: '#041b3b', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ backgroundColor: '#041b3b', color: '#fff', }} className={classes.footer}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={'/assets/img/logo2.png'}
            sx={{ width: 180, height: 180, borderRadius: '0', margin: '1rem 2rem' }}
            className={classes.clubLogo}
          />
          <nav aria-label="secondary mailbox folders">
            <Typography variant="h6" sx={{ pt: '2rem', pl: '0.8rem' }}>Quick Links</Typography>
            <List disablePadding>
              {quickLinks.map((item, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton sx={{ py: '5px' }} disablePadding>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
          <nav aria-label="secondary mailbox folders">
            <Typography variant="h6" sx={{ pt: '2rem', pl: '0.8rem' }}>Contact</Typography>
            <List disablePadding>
              {contact.map((item, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Container sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px' }}>
        <Typography variant="h5" gutterBottom>Get connected with us on social networks:</Typography>
        <Box className={classes.socialIcons}>
          {socialIcos.map((item, index) => (
            <Link key={index}>
              {item}
            </Link>
          ))}
        </Box>
      </Container>
      <Container sx={{ textAlign: 'center',mb: '1.5rem' }}>
        <Typography variant='subtitle2'>Copyright 2023 ©  All rights reserved. |
          Designe & Developed by <b>HSPM Solutions LLP.</b></Typography>
      </Container>
    </Box>
  )
}

export default Footer;