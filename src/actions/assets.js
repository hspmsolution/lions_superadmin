import { CLIENT_MSG } from "../constants/actionTypes";
import * as api from "../api";
export const addGallery = (formData) => async (dispatch) => {
    try {
      const { data, status } = await api.addGallery(formData);
      dispatch({
        type: CLIENT_MSG,
        message: { info: data.successMessage, status },
      });
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
    }
  };
  export const addSlider = (formData) => async (dispatch) => {
    try {
      const { data, status } = await api.addSlider(formData);
      dispatch({
        type: CLIENT_MSG,
        message: { info: data.successMessage, status },
      });
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
    }
  };