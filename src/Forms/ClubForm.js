import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {

  Box,
  TextField,

  MenuItem,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import {
  getSelectRegion,
  getSelectClub,
  getSelectZone,
  checkMemberId,
} from "../actions/members";
import { UPDATE_MEMBER_INFO,SELECT_CLUB } from "../constants/actionTypes";
import { MEMBER_DESIGNATION } from "../constants/universalConstant";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ClubForm = (props) => {
  const dispatch = useDispatch();
  const isEdit = props.isEdit;
  const regions = useSelector((state) => state.members.selectRegion);
  const zones = useSelector((state) => state.members.selectZone);
  const clubs = useSelector((state) => state.members.selectClub);
  const memberInfo = useSelector((state) => state.members.memberInfo);
  const [personName, setPersonName] = useState([]);

  useEffect(() => {
    dispatch(getSelectRegion());
    if(isEdit && memberInfo.id){
      dispatch(getSelectZone(memberInfo.regionName));
      dispatch(getSelectClub(memberInfo.regionName,memberInfo.zoneName));
      setPersonName(memberInfo.title);
    }
  }, [memberInfo.id]);

  const theme = useTheme();


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}>
            <TextField
              id="region"
              value={memberInfo.regionName}
              select
              required
              fullWidth
              name="regionName"
              label=" Select Region "
              onChange={(e) => {
                dispatch(getSelectZone(e.target.value));
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "regionName", value: e.target.value },
                });
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "zoneName", value: "" },
                });
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "clubName", value: "" },
                });
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "clubId", value: "" },
                });
                dispatch({ type: SELECT_CLUB, payload: [] });
              }}
              // className={classes.label}
            >
              {regions.map((region, index) => (
                <MenuItem
                  key={index}
                  value={region.regionName}>
                  {region.regionName}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}>
            <TextField
              id="zone"
              value={memberInfo.zoneName}
              select
              required
              fullWidth
              name="zoneName"
              label=" Select Zone"
              onChange={(e) => {
                dispatch(getSelectClub(memberInfo.regionName, e.target.value));
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "zoneName", value: e.target.value },
                });
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "clubName", value: "" },
                });
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "clubId", value: "" },
                });
              }}
              // className={classes.label}
            >
              {zones.map((zone, index) => (
                <MenuItem
                  key={index}
                  value={zone.zoneName}>
                  {zone.zoneName}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}>
            <TextField
              id="clubName"
              value={memberInfo.clubName}
              required
              select
              fullWidth
              name="clubName"
              label=" Select Club"
              onChange={(e) => {
                const selectedClub = clubs.find(
                  (club) => club.clubName === e.target.value
                );

                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "clubName", value: e.target.value },
                });
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "clubId", value: selectedClub.clubId },
                });
              }}
              // className={classes.label}
            >
              {clubs.map((club, index) => (
                <MenuItem
                  key={club.clubId}
                  value={club.clubName}>
                  {club.clubName}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}>
            <TextField
              id="clubId"
              value={memberInfo.clubId}
              required
              type="number"
              fullWidth
              name="clubId"
              label="Club Id"
              disabled
              // className={classes.label}
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}>
            <TextField
              id="id"
              value={memberInfo.id}
              required
              disabled={isEdit}
              type="number"
              fullWidth
              name="id"
              label="Enter Member Id"
              onChange={(e) => {
                e.target.value !== "" &&
                  dispatch(checkMemberId(e.target.value));
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "id", value: e.target.value },
                });
              }}></TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}>
      
            <FormControl>
              <InputLabel id="demo-multiple-chip-label">
                Select Designation
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                required
                value={personName}
                // onChange={handleChange}
                onChange={(e) => {
                  dispatch({
                    type: UPDATE_MEMBER_INFO,
                    payload: { name: "title", value: e.target.value },
                  });
                  handleChange(e);
                }}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Select Designation"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}>
                {MEMBER_DESIGNATION.map((title, index) => (
                  <MenuItem
                    key={title}
                    value={title}
                    style={getStyles(title, personName, theme)}>
                    {title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ClubForm;
