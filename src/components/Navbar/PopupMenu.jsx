import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { toLower } from "lodash";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Box, Grid, MenuItem } from "@mui/material";
import './Popup.css';

// tooltip function to show menu item on hover and on click

const HtmlTooltip = styled(({ className, isMatch, ...props }) => (
  <Tooltip
    leaveTouchDelay={6000000}
    enterTouchDelay={0}
    placement={"bottom"}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 620,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius: "8px",
    boxShadow: "rgb(0 0 0 / 28%) 0px 0px 13px 0px"
  },
}));

// mapping popup menu items
const PopupMenu = ({ title, menuItems }) => {
  const navigate = useNavigate();
  const DropDown = ({ dropItems }) => {
    return (
      <>
        {dropItems.map((item, index) => (
            <MenuItem key={index} onClick={() => navigate(`/${toLower((title).replaceAll(' ', ''))}/${toLower((item).replaceAll(' ', ''))}`)}>{item}</MenuItem>
        ))}
      </>
    )
  }
  
  return (
    <>
      {menuItems ? (
        <HtmlTooltip

          title={
            <Grid item xs={12}>
              <Box
                sx={{
                  // p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr' },
                  gridTemplateRows: { md: '1fr 1fr' },
                  // gap: 2,
                }}
              >

                <DropDown dropItems={menuItems} />
              </Box>
            </Grid>
          }
        >
          <div id="" >
            {title}
          </div>
        </HtmlTooltip>
      ) : (<div onClick={() => 
        {title === "Home" ? navigate(`/`) :
          navigate(`/${toLower((title).replaceAll(' ', ''))}`)}}>{title}</div>)}
    </>
  );
};

export default PopupMenu;