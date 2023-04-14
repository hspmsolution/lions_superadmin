import { AUTH, CLIENT_MSG } from "../constants/actionTypes";
import * as api from "../api";
import decodeJWT from "../utils/jwtDecode";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    const decoded = decodeJWT(data.token);
    if (decoded.detailsRequired) {
      setTimeout(() => {
        dispatch({
          type: CLIENT_MSG,
          message: {
            info: "Reset Your Password",
            status: 200,
          },
        });
      }, 0);

      navigate("/password");
    } else {
      navigate("/dashboard/app");
    }
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    console.log(error);
  }
};

export const resetPass = (formData, navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.resetPass(formData);

    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    navigate("/dashboard/edit-profile");
    setTimeout(() => {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: "Complete your basic details in profile section",
          status: 200,
        },
      });
    }, 0);
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    console.log(error);
  }
};
