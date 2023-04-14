import {
    CLIENT_MSG,MEMBER_PROFILE,AUTH
  } from "../constants/actionTypes";
  import * as api from "../api";

export const updateMember = (formData,navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.updateMember(formData);
      dispatch({
        type: CLIENT_MSG,
        message: { info: data.successMessage, status },
      });
      dispatch({ type: AUTH, payload: data });
      navigate("/dashboard/app")
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

  export const memberProfile = () => async (dispatch) => {
    try {
      const { data} = await api.memberProfile();
       dispatch({type:MEMBER_PROFILE,payload:data[0]})
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