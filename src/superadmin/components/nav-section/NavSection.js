import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
// component
import SvgColor from "../svg-color";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Groups2Icon from "@mui/icons-material/Groups2";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import CollectionsIcon from "@mui/icons-material/Collections";
import PanoramaHorizontalSelectIcon from "@mui/icons-material/PanoramaHorizontalSelect";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ ...other }) {
  const role = useSelector((state) => state.auth.role);
  const config = [
    {
      title: "dashboard",
      path: "/superadmin/dashboard/app",
      icon: <DashboardIcon />,
      isClick: false,
    },
    {
      title: "Clubs",
      path: "/superadmin/dashboard/clubs",
      icon: <ApartmentIcon />,
      isClick: false,
    },
    {
      title: "Members",
      path: "/superadmin/dashboard/members",
      icon: <Groups2Icon />,
      isClick: false,
    },
    {
      title: "General",
      path: null,
      icon: <FormatAlignJustifyIcon />,
      isClick: false,
      subItems: [
        {
          title: "Update T&C",
          path: "/superadmin/dashboard/updateTC",
          icon: icon("ic_arrow"),
        },
        {
          title: "Update Privacy Policy",
          path: "/superadmin/dashboard/privacy",
          icon: icon("ic_arrow"),
        },
        {
          title: "Add Activity Type",
          path: "/superadmin/dashboard/activityType",
          icon: icon("ic_arrow"),
        },
        {
          title: "Download Resource",
          path: "/superadmin/dashboard/Download",
          icon: icon("ic_arrow"),
        },
      ],
    },

    {
      title: "Gallery",
      path: "/superadmin/dashboard/gallery",
      icon: <CollectionsIcon />,
      isClick: false,
    },
    {
      title: "Slider",
      path: "/superadmin/dashboard/slider",
      icon: <PanoramaHorizontalSelectIcon />,
      isClick: false,
    },
    {
      title: "All Admin Reporting",
      path: "/superadmin/dashboard/alladminreport",
      icon: <NoteAltIcon />,
      isClick: false,
    },
    {
      title: "Contact Enquiries",
      path: "/superadmin/dashboard/contact",
      icon: <ContactPhoneIcon />,
      isClick: false,
    },
  ];

  const [navConfig, setNavConfig] = useState(config);

  const handleClick = (title) => {
    setNavConfig((prevState) =>
      prevState.map((item) =>
        item.title === title ? { ...item, isClick: !item.isClick } : item
      )
    );
  };

  return (
    <Box {...other}>
      <List
        disablePadding
        sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <>
            <NavItem
              key={item.title}
              item={item}
              onClick={() => {
                handleClick(item.title);
              }}
            />
            {item.subItems && item.isClick && (
              <List
                disablePadding
                sx={{ pl: 3 }}>
                {item.subItems.map((subItem) => (
                  <NavItem
                    key={subItem.title}
                    item={subItem}
                  />
                ))}
              </List>
            )}
          </>
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item, onClick }) {
  const { title, path, icon, info, subItems, isClick } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      onClick={onClick}
      sx={
        !subItems && {
          "&.active": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "rgb(29, 61, 124)",
            fontWeight: "fontWeightBold",
          },
          "&.active .css-7llk8r-MuiListItemIcon-root": {
            color: "rgb(29, 61, 124)",
          },
        }
      }>
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText
        disableTypography
        primary={title}
      />
      {subItems && (isClick ? <CloseIcon /> : <AddIcon />)}
      {info && info}
    </StyledNavItem>
  );
}
