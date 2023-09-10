import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
} from "@mui/material";
import { UPDATE_MEMBER_INFO } from "../constants/actionTypes";

const ProfileForm = () => {
  const memberInfo = useSelector((state) => state.members.memberInfo);
  const dispatch = useDispatch();
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
              width: "30%",
            }}>
            <TextField
              required
              type="text"
              id="firstName"
              label="First Name"
              name="firstName"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              value={memberInfo.firstName}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "firstName", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "30%",
            }}>
            <TextField
              type="text"
              id="middleName"
              label="Middle Name"
              name="middleName"
              fullWidth
              autoComplete="additional-name"
              variant="outlined"
              value={memberInfo.middleName}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "middleName", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "30%",
            }}>
            <TextField
              required
              type="text"
              id="lastName"
              label="Last Name"
              name="lastName"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              value={memberInfo.lastName}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "lastName", value: e.target.value },
                });
              }}
            />
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
              width: "30%",
            }}>
            <TextField
              type="email"
              id="email"
              label="Email-Id"
              name="email"
              fullWidth
              autoComplete="email"
              variant="outlined"
              value={memberInfo.email}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "email", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "30%",
            }}>
            <TextField
              type="tel"
              id="tel"
              label="Mobile Number"
              name="tel"
              fullWidth
              autoComplete="tel"
              variant="outlined"
              value={memberInfo.phone}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "phone", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "30%",
            }}>
            <TextField
              type="date"
              id="date"
              label="Date of Birth"
              name="dob"
              fullWidth
              autoComplete="bday"
              variant="outlined"
              value={memberInfo.dob}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "dob", value: e.target.value },
                });
              }}
            />
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
              width: "30%",
            }}>
            <TextField
              type="text"
              id="spouseName"
              label=" Spouse Name"
              name="spouseName"
              fullWidth
              variant="outlined"
              value={memberInfo.spouseName}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "spouseName", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "30%",
            }}>
            <TextField
              required
              id="gender"
              label="Gender"
              name="gender"
              fullWidth
              select
              variant="outlined"
              value={memberInfo.gender}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "gender", value: e.target.value },
                });
              }}>
              <MenuItem
                key={"Male"}
                value={"Male"}>
                Male
              </MenuItem>
              <MenuItem
                key={"Female"}
                value={"Female"}>
                Female
              </MenuItem>
              <MenuItem
                key={"Transgender"}
                value={"Transgender"}>
                Transgender
              </MenuItem>
            </TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "30%",
            }}>
            <TextField
              type="text"
              id="occupation"
              label="occupation"
              name="occupation"
              fullWidth
              variant="outlined"
              value={memberInfo.occupation}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "occupation", value: e.target.value },
                });
              }}
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ProfileForm;
