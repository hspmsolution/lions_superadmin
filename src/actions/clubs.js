import * as api from "../api";
import {
  CLIENT_MSG,
  All_CLUBS,
  REGION_DATA,
  DELETE_CLUB_SUCCESS,
  CLUB_INFO,
  CLUB_ACTIVITIES,
  CLUB_NEWS,
  CLUB_ADMIN_REPORT,
  ALL_ADMIN_REPORT
} from "../constants/actionTypes";

export const addClubs = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.addClubs(formData);

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
export const getClubs = () => async (dispatch) => {
  try {
    const { data } = await api.getClubs();

    dispatch({ type: All_CLUBS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteClub = (clubId) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteClub(clubId);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({ type: DELETE_CLUB_SUCCESS, payload: clubId });
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

export const getRegion = () => async (dispatch) => {
  try {
    const { data } = await api.getRegion();
    dispatch({ type: REGION_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clubInfo = (clubId) => async (dispatch) => {
  try {
    const { data } = await api.clubInfo(clubId);

    dispatch({ type: CLUB_INFO, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getClubActivites = (clubId) => async (dispatch) => {
  try {
    const { data } = await api.clubActivites(clubId);

    dispatch({ type: CLUB_ACTIVITIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getClubNews = (clubId) => async (dispatch) => {
  try {
    const { data } = await api.clubNews(clubId);

    dispatch({ type: CLUB_NEWS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clubAdminReport = (clubId, month) => async (dispatch) => {
  try {
    const { data,status } = await api.clubAdminReport(clubId, month);
    dispatch({ type: CLUB_ADMIN_REPORT, payload: data });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: CLUB_ADMIN_REPORT, payload: {} });
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};

export const AllAdminReport = (month) => async (dispatch) => {
  try {
    const { data,status } = await api.AllAdminReport(month);
    dispatch({ type: ALL_ADMIN_REPORT, payload: data });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ALL_ADMIN_REPORT, payload: {} });
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};
