import {
    CLIENT_MSG,
    REPORTED_NEWS
  } from "../constants/actionTypes";
  import * as api from "../api";

export const newsReporting = (formData) => async (dispatch) => {
    try {
      const { data, status } = await api.newsReporting(formData);
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

  export const getReportedNews = () => async (dispatch) => {
    console.log('text');
    try {
      const { data } = await api.getReportedNews();
    

      dispatch({ type: REPORTED_NEWS, payload: data });
      
    } catch (error) {
      console.log(error);
    }
  };