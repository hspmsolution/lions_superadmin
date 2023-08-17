import {
  CLIENT_MSG,
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  UPCOMING_ACTIVITY,
  ALL_ACTIVITY,
  STATS,
  DELETE_ACTIVITY_SUCCESS
} from "../constants/actionTypes";
import * as api from "../api";
import * as xlsx from "xlsx";


export const getStats = () => async (dispatch) => {
  try {
    const { data } = await api.getStats();
    dispatch({ type: STATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getActivity = () => async (dispatch) => {
  try {
    const { data } = await api.getActivity();
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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

export const getUpcomingActivity = () => async (dispatch) => {
  try {
    const { data } = await api.getUpcomingActivity();
    dispatch({ type: UPCOMING_ACTIVITY, payload: data });
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

export const deleteActivityType = (id) => async (dispatch) => {

  try {
    const { data, status } = await api.deleteActivityType(id);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({ type: DELETE_ACTIVITY_SUCCESS, payload: id });
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

export const getActivities = () => async (dispatch) => {
  try {
    const { data } = await api.getActivities();
    dispatch({ type: ALL_ACTIVITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const downloadUpcomingActivity = (data) => async (dispatch) => {
  try {
    const sheet = xlsx.utils.json_to_sheet(data);
    const book = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
    xlsx.writeFile(book, "upcoming_activities.xlsx");

    dispatch({
      type: CLIENT_MSG,
      message: { info: "Activity Downloaded", status: 200 },
    });
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: "Please try again later",
        status: 400,
      },
    });
    console.log(error);
  }
};