import { ADMIN_REPORTS,CLIENT_MSG ,ADMIN_POINTS} from "../constants/actionTypes";
import * as api from "../api";

export const getAdminReports = (month) => async (dispatch) => {
    try {
      const { data } = await api.getAdminReports(month);
      dispatch({ type: ADMIN_REPORTS, payload: data });
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

  export const getPoints = () => async (dispatch) => {
    try {
      const { data } = await api.getPoints();
      dispatch({ type: ADMIN_POINTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const addReport = (formData) => async (dispatch) => {
    try {
      const { data,status } = await api.addReport(formData);
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
      console.log(error);
    }
  };