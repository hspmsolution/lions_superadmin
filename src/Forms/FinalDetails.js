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
} from "@mui/material";
import { UPDATE_MEMBER_INFO } from "../constants/actionTypes";
const FinalDetails = () => {
  const dispatch = useDispatch();
  const memberInfo = useSelector((state) => state.members.memberInfo);
  return (
    <>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <TextField
              type="number"
              id="postalCode"
              label="Pincode"
              name="postalCode"
              fullWidth
              variant="outlined"
              value={memberInfo.postalCode}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "postalCode", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <TextField
              type="text"
              id="state"
              label="state"
              name="state"
              fullWidth
              variant="outlined"
              value={memberInfo.state}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "state", value: e.target.value },
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <TextField
              type="text"
              id="city"
              label="city"
              name="city"
              fullWidth
              variant="outlined"
              value={memberInfo.city}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "city", value: e.target.value },
                });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <TextField
              type="text"
              id="address"
              label="address"
              name="address1"
              fullWidth
              variant="outlined"
              value={memberInfo.address1}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "address1", value: e.target.value },
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              width: "40%",
            }}
          >
            <TextField
              type="text"
              id="address"
              label="address 2"
              name="address2"
              fullWidth
              variant="outlined"
              value={memberInfo.address2}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_MEMBER_INFO,
                  payload: { name: "address2", value: e.target.value },
                });
              }}
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default FinalDetails;
