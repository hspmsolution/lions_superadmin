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
      path: "/dashboard/app",
      icon: icon("ic_dashboard"),
      isClick: false,
    },
    {
      title: "Clubs",
      path: "/dashboard/clubs",
      icon: icon("ic_clubs"),
      isClick: false,
    },
    {
      title: "Members",
      path: "/dashboard/members",
      icon: icon("ic_member"),
      isClick: false,
    },
    {
      title: "General",
      path: null,
      icon: icon("ic_general"),
      isClick: false,
      subItems: [
        {
          title: "Update T&C",
          path: "/dashboard/updateTC",
          icon: icon("ic_arrow"),
        },
        {
          title: "Update Privacy Policy",
          path: "/dashboard/privacy",
          icon: icon("ic_arrow"),
        },
        {
          title: "Add Activity Type",
          path: "/dashboard/activityType",
          icon: icon("ic_arrow"),
        },
        {
          title: "Download Resource",
          path: "/dashboard/Download",
          icon: icon("ic_arrow"),
        },
      ],
    },

    {
      title: "Gallery",
      path: "/dashboard/gallery",
      icon: icon("ic_gallery"),
      isClick: false,
    },
    {
      title: "Slider",
      path: "/dashboard/slider",
      icon: icon("ic_slider"),
      isClick: false,
    },

    {
      title: "Contact Enquiries",
      path: "/dashboard/contact",
      icon: icon("ic_contact"),
      isClick: false,
    }
    
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
      <List disablePadding sx={{ p: 1 }}>
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
              <List disablePadding sx={{ pl: 3 }}>
                {item.subItems.map((subItem) => (
                  <NavItem key={subItem.title} item={subItem} />
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
            color: "text.primary",
            bgcolor: "action.selected",
            fontWeight: "fontWeightBold",
          },
        }
      }
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />
      {subItems && (isClick ? <CloseIcon /> : <AddIcon />)}
      {info && info}
    </StyledNavItem>
  );
}
