// @mui
import { styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton } from "@mui/material";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props) => (
  <ListItemButton
    disableGutters
    {...props}
  />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "0.95rem",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "rgb(29, 61, 124)",
    "&:hover .css-7llk8r-MuiListItemIcon-root": {
      color: "rgb(29, 61, 124)",
    },
  },
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});
