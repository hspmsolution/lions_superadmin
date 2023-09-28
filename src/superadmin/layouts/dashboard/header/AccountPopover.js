import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../api";
// @mui
import { alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
  Tooltip,
} from "@mui/material";
// mocks_

import { LOGOUT } from "../../../../constants/actionTypes";
import { DOMAIN_URL } from "../../../../api";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memberData = useSelector((state) => state.auth.authData);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const MENU_OPTIONS = [
    {
      label: "Profile",
      icon: "eva:person-fill",
      nav: "/dashboard/profile",
    },
    {
      label: "Change Password",
      icon: "eva:settings-2-fill",
      nav: "/password",
    },
    {
      label: "Back to Website",
      icon: "eva:settings-2-fill",
      nav: "/",
    },
  ];

  return (
    <>
      {" "}
      <Tooltip title="Account settings">
        <Box
          sx={{
            border: "8px solid transparent",
            borderRadius: "50%",
            "&:hover": {
              borderColor: "rgba(128,128,128,0.55)",
            },
          }}
        >
          <IconButton
            onClick={handleOpen}
            sx={{
              p: 0,
              ...(open && {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }),
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <ExpandMoreIcon
                  sx={{
                    backgroundColor: "#05B0E9",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "1rem",
                  }}
                />
              }
            >
              <Avatar
                src={
                  memberData?.picture
                    ? API_URL + memberData.picture
                    : memberData?.firstName.charAt(0)
                }
                alt={memberData?.firstName.charAt(0)}
              />
            </Badge>
          </IconButton>
        </Box>
      </Tooltip>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {memberData?.firstName + " " + memberData?.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {memberData?.clubName}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              component="a"
              href={DOMAIN_URL + option.nav}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={() => {
            dispatch({ type: LOGOUT });
            navigate("/superadmin");
          }}
          sx={{ m: 1 }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
