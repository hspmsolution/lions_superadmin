import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, Paper,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClubForm from "../../Forms/ClubForm";
import ProfileForm from "../../Forms/ProfileForm";
import FinalDetails from "../../Forms/FinalDetails";
import MemberInfo from "./MemberInfo";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../../actions/members";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  stepBtn: {
    background: "#F2F2F2",
    border: "none",
    borderRadius: "5px",
    padding: "20px",
    justifyContent: "space-evenly",
    boxShadow: "0px 0px 5px #BFBFBF",
    "& .MuiStepConnector-root": {
      display: "none",
    },
    "& .MuiStepIcon-root": {
      fontSize: "1.5rem",
    },
    "& .MuiStepLabel-label": {
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "white",
    },
  },
  activeStep: {
    color: "white",
    background: "#0077C0",
    "& .MuiStepIcon-root": {
      color: "#0077C0",
    },
    padding: "10px 30px 10px 30px",
    borderRadius: "4px",
  },
  inactiveStep: {
    color: "#F2F2F2",
    background: "#49A5FF",
    "& .MuiStepIcon-root": {
      color: "#49A5FF",
    },
    padding: "10px 30px 10px 30px",
    borderRadius: "4px",
  },
  totalPoints: {
    marginRight: "8px",
    display: "flex",
    alignItems: "baseline",
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const steps = ["Club Information", "Personal Information", "Final Details"];

export default function FormWizard() {
  const memberInfo = useSelector((state) => state.members.memberInfo);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  // Go to next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Go to previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Get form component for current step
  const getStepForm = () => {
    switch (activeStep) {
      case 0:
        return <ClubForm />;
      case 1:
        return <ProfileForm />;
      case 2:
        return <FinalDetails />;
      default:
        return null;
    }
  };

  // Submit form
  const handleSubmit = () => {
    dispatch(addMember(memberInfo));
  };

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          width: "25%",
          borderBottom: "2px solid #B4880B",
          color: "#003895",
          alignItems: "center",
          margin: "1em",
        }}
      >
        Add New Member
      </Typography>
      <div className={classes.root}>
        <Stepper className={classes.stepBtn} activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step
              key={step}
              className={
                activeStep === index ? classes.activeStep : classes.inactiveStep
              }
            >
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step content */}
        <Paper elevation={3} style={{ padding: "20px" }}>
          {getStepForm()}

          {/* Buttons */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              style={{ marginRight: "10px" }}
            >
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                color="primary"
                disabled={!memberInfo.id_available}
              >
                Next
              </Button>
            )}
          </div>
        </Paper>
      </div>
      <MemberInfo />
    </>
  );
}
