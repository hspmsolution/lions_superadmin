import {
  CLIENT_MSG,
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  UPCOMING_ACTIVITY,
  ALL_ACTIVITY,
  STATS,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_AWARD_SUCCESS,
  ALL_AWARDS
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

export const downloadClubRanking = () => async (dispatch) => {
  try {
    const { data,status } = await api.downloadClubRanking();
    const sheet = xlsx.utils.json_to_sheet(data);
    const book = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
    xlsx.writeFile(book, "club_ranking.xlsx");

    dispatch({
      type: CLIENT_MSG,
      message: { info: "Club Ranking Downloaded", status: 200 },
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

export const downloadAllActivity = () => async (dispatch) => {
  try {
    const { data,status} = await api.downloadAllActivity();

    const sheet = xlsx.utils.json_to_sheet(data);
    const book = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book, sheet, "Sheet1");
    xlsx.writeFile(book, "all_activities.xlsx");

    dispatch({
      type: CLIENT_MSG,
      message: { info: "Activities Downloaded", status: 200 },
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


export const downloadReport = (data,month) => async (dispatch) => {
  try {
    if(!month){
      dispatch({
        type: CLIENT_MSG,
        message: { info: "Please Select Month", status: 404 },
      });
      return;
    }
    const nonReportedClubs=data?.nonReportedClubs;
    const reportedClubs=data?.reportedClubs;
   
    const sheet1 = xlsx.utils.json_to_sheet(nonReportedClubs);
    const sheet2 = xlsx.utils.json_to_sheet(reportedClubs);

    const book1 = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book1, sheet1, "Sheet1");
    xlsx.writeFile(book1, `${month}_nonreported_club.xlsx`);
    
    const book2 = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(book2, sheet2, "Sheet2");
    xlsx.writeFile(book2, `${month}_reported_club.xlsx`);

    dispatch({
      type: CLIENT_MSG,
      message: { info: "Report downloaded", status: 200 },
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


export const awardReporting = (formData,resetForm,handleLoading) => async (dispatch) => {
  try {
    const { data, status } = await api.awardReporting(formData);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    resetForm();
    handleLoading();
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    handleLoading();
    console.log(error);
  }
};

export const getAwards = () => async (dispatch) => {
  try {
    const { data } = await api.getAwards();
    dispatch({ type: ALL_AWARDS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAward = (id) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteAward(id);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({type:DELETE_AWARD_SUCCESS,payload:id})
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};




