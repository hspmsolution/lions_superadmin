import {
  CLIENT_MSG,
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  REPORTED_ACTIVITY,
} from "../constants/actionTypes";
import * as api from "../api";

export const getActivity = () => async (dispatch) => {
  try {
    const { data } = await api.getActivity();
    dispatch({ type: ACTIVITY_TYPE, payload: data });
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

export const getSubtype = (type) => async (dispatch) => {
  try {
    const { data } = await api.getSubtype(type);
    dispatch({ type: ACTIVITY_SUBTYPE, payload: data });
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

export const getCategory = (subtype) => async (dispatch) => {
  try {
    const { data } = await api.getCategory(subtype);
    dispatch({ type: ACTIVITY_CATEGORY, payload: data });
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

export const getPlaceHolder = (category) => async (dispatch) => {
  try {
    const { data } = await api.getPlaceHolder(category);
    dispatch({ type: ACTIVITY_PLACEHOLDER, payload: data.placeholder });
  } catch (error) {
    console.log(error);
  }
};

export const getReportedActivity = () => async (dispatch) => {
  try {
    const { data } = await api.getReportedActivity();
    dispatch({ type: REPORTED_ACTIVITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addActivity = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.addActivity(formData);
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
